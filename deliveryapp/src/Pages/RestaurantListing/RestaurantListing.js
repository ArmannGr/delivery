import React,{useState,useEffect} from 'react';
import {Button, Col, Container, Row, Spinner} from 'react-bootstrap';
import PageTitle from '../../common/PageTitle';
import CategoriesCarousel from '../../common/CategoriesCarousel';
import {RestaurantListingItem} from "./RestaurantListingItem";
import {RestaurantListingSortByButton} from "./RestaurantListingSortByButton";
import {RestaurantListingLeftMenu} from "./RestaurantListingLeftMenu";
import {collection, getDocs,query,where} from "firebase/firestore"
import {restaurantConverter} from "./RestaurantModel";
import {useLocation} from "react-router-dom";
import {db} from "../../firebase";

export default function RestaurantListing(){
    const [restaurants, setRestaurants] = useState([]);
    const location = useLocation();
    const searchLocation = location.state.searchLocation;
    const capitalizedCity = searchLocation.charAt(0).toUpperCase() + searchLocation.slice(1).toLowerCase();

    //get restaurants on start
    useEffect(() => {
            getRestaurantsForAddress();
        },
        []);

    async function getRestaurantsForAddress(){
        console.log(capitalizedCity);
        const q = query(collection(db,'restaurants').withConverter(restaurantConverter),where("address.city","==",capitalizedCity));
        const querysnapshot = await getDocs(q);
        setRestaurants(querysnapshot.docs.map(doc => doc.data()));

    }



    return (
        <>
            <PageTitle
                title={`Offers Near ${capitalizedCity}`}
                subTitle="Best deals at your favourite restaurants"/>

            <section className="section pt-5 pb-5 products-listing">
                <Container>
                    <RestaurantListingSortByButton/>
                    <Row>
                        <RestaurantListingLeftMenu/>
                        <Col md={9}>
                            <CategoriesCarousel/>
                            <Row>
                                {
                                    restaurants && restaurants.map(restaurant => {
                                            return <RestaurantListingItem restaurantData={restaurant}/>;
                                        }
                                    )
                                }

                                <Col md={12} className="text-center load-more">
                                    <Button variant="primary" type="button" disabled="">
                                        <Spinner animation="grow" size="sm" className='mr-1'/>
                                        Loading...
                                    </Button>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}


