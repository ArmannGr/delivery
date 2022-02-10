import {Button, Col, Form, Image, InputGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
import Icofont from "react-icofont";
import CheckoutItem from "../../common/CheckoutItem";
import React, {useState} from "react";

import PrettifyAddress from "../../utils/AddressPrettifier";
import {IncrementItem, DecreaseItem} from "../Detail/cartService";
import {db, doc, setDoc} from "../../firebase";
import {useHistory} from "react-router-dom";

export function CheckoutOrderOverview(props) {
    const totalToPay = props.cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    const history = useHistory();

    async function ProcessPayment() {
        props.setLoading(true);
        //Change order state to paid
        const orderID = `${props.uid}${props.restaurant[0].restaurantID}`;

        const orderDoc = await setDoc(doc(db, `orders/${orderID}`), {
            payment: {
                hasPaid: true,
                paymentMethode: "TestingPaymentMethode",
                date: Date.now()
            }
        }, {
            merge: true
        });

        props.setLoading(false);
        history.push("/trackorder", {
            orderID:orderID

        });
    }

    return <>
        <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
            {props.restaurant && props.restaurant.map(restaurant => <div
                    className="d-flex mb-4 osahan-cart-item-profile">
                    <Image fluid className="mr-3 rounded-pill" alt="osahan" src={restaurant.profileImage}/>
                    <div className="d-flex flex-column">
                        <h6 className="mb-1 text-white">{restaurant.name}
                        </h6>
                        <p className="mb-0 text-white"><Icofont icon="location-pin"/> {PrettifyAddress(restaurant.address)}
                        </p>
                    </div>
                </div>
            )}
            <div className="bg-white rounded shadow-sm mb-2">
                {props.cart && props.cart.map(item => {
                        return <CheckoutItem
                            itemName={item.name}
                            price={item.price * item.quantity}
                            priceUnit="€"
                            qty={item.quantity}
                            increase={() => IncrementItem(item.name, props.setLoading, props.restaurant[0].restaurantID, props.uid, props.setCart)}
                            decrease={() => DecreaseItem(item.name, props.setLoading, props.restaurant[0].restaurantID, props.uid, props.setCart)}
                        />;
                    }
                )
                }

            </div>
            <div className="mb-2 bg-white rounded p-2 clearfix">
                <p className="mb-1">Item Total <span className="float-right text-dark">{`€${totalToPay}`}</span></p>
                <hr/>
                <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">{`€${totalToPay}`}</span>
                </h6>
            </div>
            <Button onClick={ProcessPayment} variant="success"
                    className="btn btn-success btn-block btn-lg">
                <>{`PAY€${totalToPay}`} <Icofont icon="long-arrow-right"/></>
            </Button>

        </div>
    </>;
}