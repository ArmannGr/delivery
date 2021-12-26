import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Button, Col, Container, Image, Nav, Row, Tab} from 'react-bootstrap';
import CheckoutItem from '../../common/CheckoutItem';
import Icofont from 'react-icofont';
import RestaurantDetailRatingsAndReviews from "./restaurantDetailRatingsAndReviews";
import RestaurantDetailMenuListView from "./restaurantDetailMenuListView";
import RestaurantDetailGallery from "./restaurantDetailGallery";
import RestaurantDetailInfo from "./restaurantDetailInfo";
import RestaurantDetailHeader from "./restaurantDetailHeader";


export default function RestaurantDetail() {


    const state = {
            showAddressModal: false,
            users:[
                {
                    name:'Osahan Singh',
                    image:'/img/user/5.png',
                    url:'#'
                },
                {
                    name:'Gurdeep Osahan',
                    image:'/img/user/2.png',
                    url:'#'
                },
                {
                    name:'Askbootstrap',
                    image:'/img/user/3.png',
                    url:'#'
                },
                {
                    name:'Osahan Singh',
                    image:'/img/user/4.png',
                    url:'#'
                }
            ]
        };

    const getQty = ({id,quantity}) => {
    }

    const getStarValue = ({value}) => {
        console.log(value);
    }

        const location = useLocation()
        const restaurant = location.state;
        console.log(restaurant);
        return (
            <>
                <RestaurantDetailHeader rating={restaurant.stars} address={restaurant.address} title={restaurant.name} tags={restaurant.tags} profileImage={restaurant.profileImage} backgroundImage={restaurant.backgroundImage}/>

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
                                                <RestaurantDetailMenuListView  enuListView value={10} restaurantID={restaurant.id} />
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                <RestaurantDetailGallery restaurant={restaurant}/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                <RestaurantDetailInfo restaurant={restaurant} />
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="fourth">
                                                <RestaurantDetailRatingsAndReviews restaurantID={restaurant.id}/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Col>
                                {/* --------------------------------------------------- */}
                                <Col md={4}>
                                    <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                                        <h5 className="mb-1 text-white">Your Order
                                        </h5>
                                        <p className="mb-4 text-white">6 Items</p>
                                        <div className="bg-white rounded shadow-sm mb-2">
                                            <CheckoutItem
                                                itemName="Chicken Tikka Sub"
                                                price={314}
                                                priceUnit="$"
                                                id={1}
                                                qty={2}
                                                show={true}
                                                minValue={0}
                                                maxValue={7}
                                                getValue={getQty}
                                            />
                                            <CheckoutItem
                                                itemName="Cheese corn Roll"
                                                price={260}
                                                priceUnit="$"
                                                id={2}
                                                qty={1}
                                                show={true}
                                                minValue={0}
                                                maxValue={7}
                                                getValue={getQty}
                                            />
                                            <CheckoutItem
                                                itemName="Mixed Veg"
                                                price={122}
                                                priceUnit="$"
                                                id={3}
                                                qty={1}
                                                show={true}
                                                minValue={0}
                                                maxValue={7}
                                                getValue={getQty}
                                            />
                                            <CheckoutItem
                                                itemName="Black Dal Makhani"
                                                price={652}
                                                priceUnit="$"
                                                id={1}
                                                qty={1}
                                                show={true}
                                                minValue={0}
                                                maxValue={7}
                                                getValue={getQty}
                                            />
                                            <CheckoutItem
                                                itemName="Mixed Veg"
                                                price={122}
                                                priceUnit="$"
                                                id={4}
                                                qty={1}
                                                show={true}
                                                minValue={0}
                                                maxValue={7}
                                                getValue={getQty}
                                            />
                                        </div>
                                        <div className="mb-2 bg-white rounded p-2 clearfix">
                                            <Image fluid className="float-left" src="/img/wallet-icon.png"/>
                                            <h6 className="font-weight-bold text-right mb-2">Subtotal : <span
                                                className="text-danger">$456.4</span></h6>
                                            <p className="seven-color mb-1 text-right">Extra charges may apply</p>
                                            <p className="text-black mb-0 text-right">You have saved $955 on the
                                                bill</p>
                                        </div>
                                        <Link to="/thanks" className="btn btn-success btn-block btn-lg">Checkout
                                            <Icofont icon="long-arrow-right"/></Link>
                                        <div className="pt-2"></div>
                                        <div className="alert alert-success" role="alert">
                                            You have saved <strong>$1,884</strong> on the bill
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Tab.Container>
            </>
        );
}

