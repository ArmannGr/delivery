import {Col, Row} from "react-bootstrap";
import QuickBite from "../../common/QuickBite";
import React from "react";
import {DecreaseItem,IncrementItem} from "./cartService";

export default function RestaurantDetailMenuListView(props) {

    return <Row>

        <h5 className="mb-4 mt-3 col-md-12">Menu <small className="h6 text-black-50">{props.menuItems && props.menuItems.length}</small></h5>
        <Col md={12}>
            <div className="bg-white rounded border shadow-sm">

                {props.menuItems && props.menuItems.map(item => {
                    // whether in the current cart user has this item if yes update the quantity
                    const cartItem =  props.cart.find(cartItem => cartItem.name === item.name);
                    const quantity = cartItem === undefined ? 0 : cartItem.quantity;

                        return <QuickBite
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            priceUnit='€'
                            restaurantID={props.restaurantID}
                            decrease={(itemName)=>DecreaseItem(itemName,props.setLoading,props.restaurantID,props.uid,props.setCart)}
                            increase={(itemData)=>IncrementItem(itemData,props.setLoading,props.restaurantID,props.uid,props.setCart)}
                            quantity={quantity}
                        />;
                    }
                )
                }

            </div>
        </Col>
    </Row>;
}