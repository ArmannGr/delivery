import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Button, Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import Icofont from 'react-icofont';
import RestaurantDetailRatingsAndReviews from "./restaurantDetailRatingsAndReviews";
import RestaurantDetailMenuListView from "./restaurantDetailMenuListView";
import RestaurantDetailGallery from "./restaurantDetailGallery";
import RestaurantDetailInfo from "./restaurantDetailInfo";
import RestaurantDetailHeader from "./restaurantDetailHeader";
import LoadingOverlay from "react-loading-overlay";
import ClockLoader from "react-spinners/BeatLoader";
import * as PropTypes from "prop-types";
import {OrderSummary} from "./orderSummary";
import {useAuth} from "../../contexts/AuthContext";
import {getMenuItems} from "./menuService";
import {getUserCart,DecreaseItem,IncrementItem} from "./cartService";

OrderSummary.propTypes = {value: PropTypes.func};
export default function RestaurantDetail() {

    const [cart,setCart] = useState([]);
    const {currentUser} = useAuth();
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoadingState] = useState(false)
    const location = useLocation()
    const restaurant = location.state;

    useEffect(()=> getMenuItems(restaurant.id,setMenuItems),[]);
    useEffect(()=> getUserCart(restaurant.id,currentUser.uid,setCart),[]);

    return (
        <LoadingOverlay
            active={loading}
            spinner={<ClockLoader color={"#fff"}/>}
            // text='Loading...'
        >
            <RestaurantDetailHeader rating={restaurant.stars} address={restaurant.address} title={restaurant.name}
                                    tags={restaurant.tags} profileImage={restaurant.profileImage}
                                    backgroundImage={restaurant.backgroundImage}/>

            <Tab.Container defaultActiveKey="first">
                <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
                    <Container>
                        <Row>
                            <Col md={12}>
		                  <span className="restaurant-detailed-action-btn float-right">
		                     <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><Icofont
                                 icon="heart" className='text-danger'/> Mark as Favourite</Button>
		                     <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><Icofont
                                 icon="cauli-flower" className='text-success'/>  Pure Veg</Button>
		                     <Button variant='outline-danger' size='sm' type="button"><Icofont icon="sale-discount"/>  OFFERS</Button>
		                  </span>
                                <Nav id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Order Online</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Gallery</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Restaurant Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Ratings & Reviews</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
                    <Container>
                        <Row>
                            {/* Here is the issue */}
                            <Col md={8}>
                                <div className="offer-dedicated-body-left">
                                    <Tab.Content className='h-100'>

                                        <Tab.Pane eventKey="first">
                                            <RestaurantDetailMenuListView enuListView value={10}
                                                                          restaurantID={restaurant.id}
                                                                          setLoading={setLoadingState}
                                                                          uid={currentUser.uid}
                                                                          setMenuItems={setMenuItems}
                                                                          menuItems={menuItems}
                                                                          cart={cart}
                                                                          setCart={setCart}
                                            />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
                                            <RestaurantDetailGallery restaurant={restaurant}/>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="third">
                                            <RestaurantDetailInfo restaurant={restaurant}/>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="fourth">
                                            <RestaurantDetailRatingsAndReviews restaurantID={restaurant.id}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Col>

                            <OrderSummary cart={cart} uid={currentUser.uid} restaurantID={restaurant.id}
                                          decrease={(itemName)=>DecreaseItem(itemName,setLoadingState,restaurant.id,currentUser.uid,setCart)}
                                          increase={(itemName)=>IncrementItem(itemName,setLoadingState,restaurant.id,currentUser.uid,setCart)}
                            />
                        </Row>
                    </Container>
                </section>
            </Tab.Container>
        </LoadingOverlay>
    );
}

