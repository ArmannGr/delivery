import React from 'react';
import {useState, useEffect} from 'react';
import {CheckoutOrderOverview} from "./CheckoutOrderOverview";
import {useAuth} from "../../contexts/AuthContext";
import {getTrackOrderData, placeAnonymousOrder} from "../Detail/cartService";
import ClockLoader from "react-spinners/BeatLoader";
import LoadingOverlay from "react-loading-overlay";
import {useHistory, useLocation} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CheckoutGuestForm from "./CheckoutGuestForm";
import {TRACK_ORDER_PATH} from "../TrackOrder/TrackOrder";

export const CHECKOUT_ROUTE = "/checkout";
export default function Checkout() {
    const [checkOutOrder, setCheckOutOrder] = useState();
    const [validated, setValidated] = useState(false);

    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    const history = useHistory();

    useEffect(() => {

        getTrackOrderData(location.state.restaurantID, location.state.uid, setCheckOutOrder)

    }, []);

    async function placeOrder(event) {
        setLoading(true);
        // get form data if user is not logged in
        if (currentUser.isAnonymous) {

            var formElements = document.forms['guestForm'];//.elements['street'].value;
            if (formElements.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                setLoading(false);
                setValidated(true);
            } else {
                setLoading(false);
                setValidated(true);
                var anonymousOrderData = {
                    street: formElements.elements['street'].value,
                    houseNumber: formElements.elements['houseNumber'].value,
                    postalCode: formElements.elements['postalCode'].value,
                    city: formElements.elements['city'].value,
                    name: formElements.elements['name'].value,
                    email: formElements.elements['email'].value,
                    number: formElements.elements['number'].value,
                    orderID: location.state.orderID,
                };
                console.log(anonymousOrderData);
                await placeAnonymousOrder(anonymousOrderData, setLoading);
                history.push(TRACK_ORDER_PATH, {
                    orderID: location.state.orderID
                });
            }

        } else {

        }

    }

    return (
        <LoadingOverlay
            active={loading}
            spinner={<ClockLoader color={"#fff"}/>}
        >

            <section className="offer-dedicated-body mt-4 ml-2 mr-2 ">

                {checkOutOrder === undefined ? <></> :
                    <CheckoutOrderOverview cart={checkOutOrder.order} restaurant={checkOutOrder.restaurant}
                                           setLoading={setLoading}
                                           uid={currentUser.uid}/>}

            </section>

            {currentUser.isAnonymous ? <CheckoutGuestForm validated={validated}/> : <></>}

            <section className="m-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Lieferzeit</Card.Title>
                        <Card.Text>
                            Geschätzte Lieferzeit: 40-65 Min
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Bezahlart</Card.Title>
                        <Card.Text>
                            Barzahlung
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Button className="mt-5" variant="primary" onClick={placeOrder} size="lg" block>
                    Bestellen und bezahlen
                </Button>

            </section>

        </LoadingOverlay>

    );

}
