import {Col, Row} from "react-bootstrap";
import QuickBite from "../../common/QuickBite";
import React, {useEffect, useState} from "react";
import {collection, db, getDocs} from "../../firebase";
import {menuConverter} from "./menuModel";

export default function RestaurantDetailMenuListView(props) {

    useEffect(()=> getMenuItems(),[]);
    const [menuItems, setMenuItems] = useState([]);

    async function getMenuItems(){
        console.log('Getting menu items for restaurant with following ID '+props.restaurantID);
        const querySnapshot = await getDocs(collection(db,`restaurants/${props.restaurantID}/menu`).withConverter(menuConverter));
        setMenuItems(querySnapshot.docs.map(doc => doc.data()));
    }

    return <Row>
        <h5 className="mb-4 mt-3 col-md-12">Menu <small className="h6 text-black-50">{menuItems && menuItems.length}</small></h5>
        <Col md={12}>
            <div className="bg-white rounded border shadow-sm">

                {menuItems && menuItems.map(item =>
                    <QuickBite
                        id={item.name}
                        title={item.name}
                        price={item.price}
                        priceUnit='€'
                        getValue={props.value}
                        // image={item.image}
                    />
                )
                }


            </div>
        </Col>
    </Row>;
}