import React from 'react';
import {useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {CheckoutOrderOverview} from "./CheckoutOrderOverview";
import {useAuth} from "../../contexts/AuthContext";
import {getCartByUID} from "../Detail/cartService";
import ClockLoader from "react-spinners/BeatLoader";
import LoadingOverlay from "react-loading-overlay";

export default function Checkout() {
    const [carts, setCarts] = useState([]);
    const {currentUser} = useAuth();
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCartByUID(currentUser.uid, setCarts, setRestaurants);

    }, []);


    return (
        <LoadingOverlay
            active={loading}
            spinner={<ClockLoader color={"#fff"}/>}
        >

            <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2 ">
                {carts && restaurants && carts.map((value, index) => {
                    if(restaurants.length === 0 || carts.length === 0) return;
                    return<CheckoutOrderOverview cart={value} restaurant={restaurants[index]} setLoading={setLoading}
                                                 setCart={setCarts} uid={currentUser.uid}/>;
                })}


            </section>
        </LoadingOverlay>

    );

}
