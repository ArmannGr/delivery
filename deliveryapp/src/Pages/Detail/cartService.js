import {collection, db, doc, getDoc, getDocs, setDoc, where} from "../../firebase";


export async function getRestaurant(restaurantID) {
    const orderPath = `restaurants/${restaurantID}/`;
    const orderDoc = await getDoc(doc(db, orderPath));
    if (orderDoc.exists()) {
        return orderDoc.data();
    } else {
        return {};
    }
}

export async function getUserCart(restaurantID, uid, setCart) {
    const orderPath = `orders/${uid}${restaurantID}/`;
    console.log(orderPath);
    const orderDoc = await getDoc(doc(db, orderPath));
    if (orderDoc.exists()) {
        const items = orderDoc.data()["items"];
        setCart([...items]);
    } else {
        setCart([]);
    }
}

export async function getOrder(orderID) {
    const orderPath = `orders/${orderID}`;
    console.log(orderPath);
    const orderDoc = await getDoc(doc(db, orderPath));
    if (orderDoc.exists()) {
        return orderDoc.data();
    } else {
        return {};
    }
}

export async function IncrementItem(itemName, setLoading, restaurantID, uid, setCart) {
    setLoading(true);
    console.log(uid);
    console.log(restaurantID);
    //Add or Increase item
    const orderPath = `orders/${uid}${restaurantID}/`;
    let orderDoc = await getDoc(doc(db, orderPath));
    const menu = await getDocs(collection(db, `restaurants/${restaurantID}/menu`));
    const menuItem = menu.docs.find(doc => doc.data()["name"] === itemName);
    if (menuItem === undefined) {
        setLoading(false);
        return;
    }
    console.log(menu);
    const price = menuItem.data()["price"];

    if (orderDoc.exists()) {
        console.log("Exists");
        //Increment
        let items = orderDoc.data()["items"];
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

        await setDoc(doc(db, orderPath), {items: items}, {merge: true});
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
        await setDoc(doc(db, orderPath), {
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
            }
        });
        setCart([item]);
    }
    setLoading(false);
}

export async function DecreaseItem(itemName, setLoading, restaurantID, uid, setCart) {
    setLoading(true);
    const orderPath = `orders/${uid}${restaurantID}/`;
    let orderDoc = await getDoc(doc(db, orderPath));
    let items = orderDoc.data()["items"];
    let currentItem = items.find(orderItem => orderItem.name === itemName);
    if (currentItem.quantity === 1) {
        items = items.filter(cartItem => cartItem !== currentItem);
    } else {

        currentItem.quantity--;
    }
    //upload
    await setDoc(doc(db, orderPath), {items: items}, {merge: true});
    setCart(items);
    setLoading(false);
}

export async function getCartByUID(uid, setCart, setRestaurant) {
    //Get the first cart
    const collectionPath = 'orders';
    const orders = await getDocs(collection(db, collectionPath), where("userID", "==", uid));
    const firstDoc = orders.docs[0];
    if (firstDoc === undefined) return;

    //Get Restaurant DATA
    const restaurantID = firstDoc.data()["restaurantID"];
    const cart = firstDoc.data()["items"];
    const restaurantPath = `restaurants/${restaurantID}/`;
    console.log(restaurantPath);
    const restaurantDoc = await getDoc(doc(db, restaurantPath));
    console.log(restaurantDoc);
    setCart(cart);
    let restaurantData = {...restaurantDoc.data(), restaurantID: restaurantID};
    setRestaurant([restaurantData]);
}

export async function getTrackOrderData(orderID,setTrackOrderData) {
    const order = await getOrder(orderID);
    const restaurant = await getRestaurant(order.restaurantID);
    const trackData = [{
        order: order,
        restaurant: restaurant
    }];
    setTrackOrderData(trackData);
}

/// Return all the paid orders for user
export async function getOrderHistory(uid,setOrderHistory){
    const ordersDocs = (await getDocs(collection(db, '/orders'), where("userID", "==", uid), where("payment.hasPaid","==",true))).docs;
    let orderHistory = [];
    for(const order of ordersDocs){
        // get restaurant for this order
        const restaurantDoc = (await getRestaurant(order.data()['restaurantID']));
        orderHistory.push({
            items:order.data()['items'],
            restaurant:restaurantDoc,
            orderID:order.id
        });
    }
    console.log(orderHistory);

    setOrderHistory(orderHistory);

}