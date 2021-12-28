import {Col, Image} from "react-bootstrap";
import CheckoutItem from "../../common/CheckoutItem";
import {Link} from "react-router-dom";
import Icofont from "react-icofont";
import React from "react";

export function OrderSummary(props) {
    if(props.cart.length === 0)
        return <></>;
    return<Col md={4}>
        <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
            <h5 className="mb-1 text-white">Your Order
            </h5>
            <p className="mb-4 text-white">{props.cart.length} Items</p>
            <div className="bg-white rounded shadow-sm mb-2">
                {props.cart && props.cart.map(item => {
                    console.table(item);
                    return <CheckoutItem
                        itemName={item.name}
                        price={item.price*item.quantity}
                        priceUnit="€"
                        id={1}
                        qty={item.quantity}
                        show={true}
                        minValue={0}
                        maxValue={100}
                        getValue={20}
                        increase={()=>props.increase(item.name)}
                        decrease={()=>props.decrease(item.name)}
                    />;
                    })
                }


            </div>
            <div className="mb-2 bg-white rounded p-2 clearfix">
                <Image fluid className="float-left" src="/img/wallet-icon.png"/>
                <h6 className="font-weight-bold text-right mb-2">Subtotal : <span
                    className="text-danger">€{props.cart.reduce((a,b)=>a+(b.price*b.quantity),0)}</span></h6>
                <p className="seven-color mb-1 text-right">Extra charges may apply</p>
                {/*<p className="text-black mb-0 text-right">You have saved $955 on the*/}
                {/*    bill</p>*/}
            </div>
            <Link to="/thanks" className="btn btn-success btn-block btn-lg">Checkout
                <Icofont icon="long-arrow-right"/></Link>
            <div className="pt-2"></div>
            {/*<div className="alert alert-success" role="alert">*/}
            {/*    You have saved <strong>$1,884</strong> on the bill*/}
            {/*</div>*/}
        </div>
    </Col>;
}