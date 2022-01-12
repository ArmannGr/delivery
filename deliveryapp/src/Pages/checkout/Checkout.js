import React from 'react';
import {useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {CheckoutOrderOverview} from "./CheckoutOrderOverview";
import {useAuth} from "../../contexts/AuthContext";
import {getCartByUID} from "../Detail/cartService";
import ClockLoader from "react-spinners/BeatLoader";
import LoadingOverlay from "react-loading-overlay";

export default function Checkout() {
    const [cart, setCart] = useState([]);
    const {currentUser} = useAuth();
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCartByUID(currentUser.uid, setCart,setRestaurant);

    }, []);


    return (
        <LoadingOverlay
            active={loading}
            spinner={<ClockLoader color={"#fff"}/>}
        >
            <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2 ">
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <CheckoutOrderOverview cart={cart} restaurant={restaurant} setLoading={setLoading}
                                               setCart={setCart} uid={currentUser.uid}/>
                    </Col>
                </Row>


            </section>
        </LoadingOverlay>

    );

}
