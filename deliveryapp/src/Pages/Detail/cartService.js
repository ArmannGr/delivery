import {collection, db, doc, getDoc, getDocs, setDoc} from "../../firebase";


export async function getUserCart(restaurantID,uid,setCart){
    console.log(uid);
    const orderPath =`orders/${uid}${restaurantID}/`;
    const orderDoc = await getDoc(doc(db,orderPath));
    if(orderDoc.exists()) {
        const items = orderDoc.data()["items"];
        setCart(items);
    }else{
        setCart([]);
    }
}

export async function IncrementItem (itemName,setLoading,restaurantID,uid,setCart)  {
    setLoading(true);
    console.log(uid);
    //Add or Increase item
    const orderPath =`orders/${uid}${restaurantID}/`;
    let orderDoc = await getDoc(doc(db,orderPath));
    const menu = await getDocs(collection(db, `restaurants/${restaurantID}/menu`));
    const menuItem = menu.docs.find(doc => doc.data()["name"] === itemName);
    if(menuItem === undefined) {
        setLoading(false);
        return
    }
    console.log(menu);
    const price = menuItem.data()["price"];

    if(orderDoc.exists()){
        console.log("Exists");
        //Increment
        let items = orderDoc.data()["items"];
        let currentItem = items.find(orderItem => orderItem.name === itemName);
        if(currentItem === undefined){
            items.push({
                name:itemName,
                quantity:1,
                price:price,
            });
        }else{
            currentItem.quantity++;
        }

        await setDoc(doc(db,orderPath),{items:items},{merge:true});
        setCart(items);
    }else{
        console.log("Doesn't exists");
        console.log("Adding this item to the cart...");
        const item = {
            name:itemName,
            quantity:1,
            price:price,

        };
        console.table(item);
        //Add
        await setDoc(doc(db,orderPath),{
            restaurantID: restaurantID,
            date:Date.now().toString(),
            total:price,
            items:[item]
        });
        setCart([item]);
    }
    setLoading(false);
}

export async function DecreaseItem (itemName,setLoading,restaurantID,uid,setCart)  {
    setLoading(true);
    const orderPath =`orders/${uid}${restaurantID}/`;
    let orderDoc = await getDoc(doc(db,orderPath));
    let items = orderDoc.data()["items"];
    let currentItem = items.find(orderItem => orderItem.name === itemName);
    if(currentItem.quantity === 1) {
        items = items.filter(cartItem => cartItem !== currentItem);
    }
    else{

        currentItem.quantity--;
    }
    //upload
    await setDoc(doc(db,orderPath),{items:items},{merge:true});
    setCart(items);
    setLoading(false);

}