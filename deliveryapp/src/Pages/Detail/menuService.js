import {collection, db, getDocs} from "../../firebase";
import {menuConverter} from "./menuModel";


export async function getMenuItems(restaurantID,setMenuItems){
    console.log('Getting menu items for restaurant with following ID '+restaurantID);
    const querySnapshot = await getDocs(collection(db,`restaurants/${restaurantID}/menu`).withConverter(menuConverter));
    setMenuItems(querySnapshot.docs.map(doc => doc.data()));
}

