import {collection, db, doc, getDoc, getDocs, setDoc, where, limit, query, addDoc} from "../../firebase";

export async function getRestaurant(restaurantID) {
    const orderPath = `restaurants/${restaurantID}/`;
    const orderDoc = await getDoc(doc(db, orderPath));
    if (orderDoc.exists()) {
        return {
            restaurantID: restaurantID, ...orderDoc.data()
        };
    } else {
        return {};
    }
}

// order -> ID -> restaurantID + userID
// order -> ID

export async function getUserCart(restaurantID, uid, setCart) {
    console.log("Getting cart!");
    const q = query(collection(db, '/orders'), where("userID", "==", uid), where("restaurantID", "==", restaurantID), where("deliveryStatus.status", "==", "Cart"), limit(1));
    let querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const items = querySnapshot.docs[0].data()['items'];
        setCart([...items]);
    } else {
        setCart([]);
    }
}

export async function getOrder(restaurantID, uid) {
    const q = query(collection(db, '/orders'), where("userID", "==", uid), where("restaurantID", "==", restaurantID), where("deliveryStatus.status", "==", "Cart"), limit(1));
    let querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    } else {
        return {};
    }
}

export async function IncrementItem(itemName, setLoading, restaurantID, uid, setCart) {
    setLoading(true);
    console.log(uid);
    console.log(restaurantID);
    //Add or Increase item


    const q = query(collection(db, '/orders'), where("userID", "==", uid), where("restaurantID", "==", restaurantID), where("deliveryStatus.status", "==", "Cart"), limit(1));
    let querySnapshot = await getDocs(q);

    const menu = await getDocs(collection(db, `restaurants/${restaurantID}/menu`));
    const menuItem = menu.docs.find(doc => doc.data()["name"] === itemName);
    if (menuItem === undefined) {
        setLoading(false);
        return;
    }
    console.log(menu);
    const price = menuItem.data()["price"];

    if (!querySnapshot.empty) {
        var order = querySnapshot.docs[0];
        //Increment
        let items = order.data()["items"];
        let currentItem = items.find(orderItem => orderItem.name === itemName);
        if (currentItem === undefined) {
            items.push({
                name: itemName,
                quantity: 1,
                price: price,
            });
        } else {
            currentItem.quantity++;
        }

        await setDoc(doc(db, `/orders/${order.id}`), {items: items}, {merge: true});
        setCart(items);
    } else {
        console.log("Doesn't exists");
        console.log("Adding this item to the cart...");
        const item = {
            name: itemName,
            quantity: 1,
            price: price,

        };
        console.table(item);
        //Add
        await addDoc(collection(db, 'orders'), {
            restaurantID: restaurantID,
            userID: uid,
            date: Date.now().toString(),
            total: price,
            items: [item],
            deliveryAddress: {
                city: 'default City',
                houseNumber: 'default HouseNumber',
                postalCode: 'default PostalCode',
                state: 'default State',
                street: 'default Street'
            },
            payment: {
                hasPaid: false
            },
            deliveryStatus: {
                status: "Cart"
            }
        });
        setCart([item]);
    }
    setLoading(false);
}

export async function DecreaseItem(itemName, setLoading, restaurantID, uid, setCart) {
    setLoading(true);

    const q = query(collection(db, '/orders'), where("userID", "==", uid), where("restaurantID", "==", restaurantID), where("deliveryStatus.status", "==", "Cart"), limit(1));
    let querySnapshot = await getDocs(q);

    let orderDoc = querySnapshot.docs[0];
    let items = orderDoc.data()["items"];
    let currentItem = items.find(orderItem => orderItem.name === itemName);
    if (currentItem.quantity === 1) {
        items = items.filter(cartItem => cartItem !== currentItem);
    } else {

        currentItem.quantity--;
    }

    //upload
    await setDoc(doc(db, `orders/${orderDoc.id}`), {items: items}, {merge: true});
    setCart(items);
    setLoading(false);
}

export async function getTrackOrderData(restaurantID, uid, setTrackOrderData) {
    const order = await getOrder(restaurantID, uid);
    const restaurant = await getRestaurant(restaurantID);
    const trackData = {
        order: order,
        restaurant: restaurant
    };


    setTrackOrderData(trackData);
}

/// Return all the paid orders for user
export async function getOrderHistory(uid, setOrderHistory) {
    const q = query(collection(db, '/orders'), where("userID", "==", uid), where("payment.hasPaid", "==", true));
    const ordersDocs = (await getDocs(q)).docs;
    let orderHistory = [];
    for (const order of ordersDocs) {
        // get restaurant for this order
        const restaurantDoc = (await getRestaurant(order.data()['restaurantID']));
        orderHistory.push({
            items: order.data()['items'],
            restaurant: restaurantDoc,
            orderID: order.id
        });
    }

    setOrderHistory(orderHistory);

}

export async function placeAnonymousOrder(order, setLoading) {
    //TODO Customer should receive an email - Server

    //TODO Restaurant should receive an email - Server

    //Order should be set to paid
    //Delivery address needs to be updated
    var orderPath = `/orders/${order.orderID}`;
    var data = {
        payment: {
            hasPaid: true,
            date: Date.now().toString(),
            paymentMethod: 'cash'
        },
        contact: {
            email: order.email,
            number: order.number,
            name: order.name
        },
        deliveryAddress: {
            city: order.city,
            houseNumber: order.houseNumber,
            postalCode: order.postalCode,
            street: order.street
        }
    };
    await setDoc(doc(db, orderPath), data, {merge: true});

    setLoading(false);
}