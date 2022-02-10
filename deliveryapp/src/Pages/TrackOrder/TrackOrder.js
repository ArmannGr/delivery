import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Icofont from 'react-icofont';
import CartDropdownItem from '../../common/CartDropdownItem';
import {getTrackOrderData} from "../Detail/cartService";
import PrettifyAddress from "../../utils/AddressPrettifier";

export default function TrackOrder() {

    const location = useLocation();
    const [trackOrderData, setTrackOrderData] = useState([]);
    const params = location.state;

    useEffect(() => {
        console.log(params.orderID);
        getTrackOrderData(params.orderID, setTrackOrderData);

    }, []);


    return (
        <div>
            {trackOrderData && trackOrderData.map(data => {

                return <section
                    className="section bg-white osahan-track-order-page position-relative pt-4">
                    <Row className="justify-content-md-center">
                        <Col md={5}>
                            <div className="bg-white p-4 shadow-lg mb-2">
                                <div className="mb-2"><small>Order #{data.order.date}<Link

                                    className="float-right font-weight-bold" to="#"><Icofont
                                    icon="headphone-alt"/> HELP</Link></small></div>
                                <h6 className="mb-1 mt-1">
                                    <Link to="/detail"
                                          className="text-black">{data.restaurant.name}
                                    </Link>)
                                </h6>
                                <p className="text-gray mb-0"><Icofont
                                    icon="clock-time"/> {data.order.date} | {data.order.items.length} |
                                    €{data.order.items.reduce((a, b) => a + (b.price * b.quantity), 0)} </p>)


                            </div>
                            <div className="bg-white p-4 shadow-lg">
                                <div className="osahan-track-order-detail po">
                                    <h5 className="mt-0 mb-3">Order Details</h5>
                                    <Row>
                                        <Col md={5}>
                                            <small>FROM</small>
                                            <h6 className="mb-1 mt-1">
                                                <Link to="/detail" className="text-black"><Icofont
                                                    icon="food-cart"/> {data.restaurant.name}
                                                </Link>)
                                            </h6>
                                            <p className="text-gray mb-5">{PrettifyAddress(data.restaurant.address)}</p>)

                                            <small>DELIVER TO</small>
                                            <h6 className="mb-1 mt-1"><span className="text-black"><Icofont
                                                icon="map-pins"/> Other
	                                 </span>
                                            </h6>
                                            <p className="text-gray mb-0">{PrettifyAddress(data.order.deliveryAddress)}

                                            </p>
                                        </Col>
                                        <Col md={7}>
                                            <div className="mb-2"><small><Icofont
                                                icon="list"/> {data.order.items.length} ITEMS</small></div>
                                            {data.order.items && data.order.items.map(item =>

                                                <CartDropdownItem
                                                    icoIcon='ui-press'
                                                    iconClass='text-danger food-item'
                                                    title={item.name}
                                                    price={item.price}
                                                />)}

                                            <hr/>
                                            <p className="mb-0 font-weight-bold text-black">TOTAL BILL <span
                                                className="float-right text-secondary">€{data.order.items.reduce((a, b) => a + (b.price * b.quantity), 0)}</span>
                                            </p>
                                            <p className="mb-0 text-info"><small>Paid
                                                via {data.order.payment.paymentMethode}</small>

                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="bg-white p-4 shadow-lg mt-2">
                                <Row className="text-center">
                                    <Col>
                                        <Icofont icon="tasks" className="icofont-3x text-info"/>
                                        <p className="mt-1 font-weight-bold text-dark mb-0">Order Received</p>
                                        <small className="text-info mb-0">NOW</small>
                                    </Col>
                                    <Col>
                                        <Icofont icon="check-circled" className="icofont-3x text-success"/>
                                        <p className="mt-1 font-weight-bold text-dark mb-0">Order Confirmed</p>
                                        <small className="text-success mb-0">NEXT</small>
                                    </Col>
                                    <Col>
                                        <Icofont icon="delivery-time" className="icofont-3x text-primary"/>
                                        <p className="mt-1 font-weight-bold text-dark mb-0">Order Picked Up</p>
                                        <small className="text-primary mb-0">LATER (ET : 30min)</small>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </section>;
            })}
        </div>
    );
}

