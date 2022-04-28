import React, {Component, useState} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel3';
import TopSearch from './Components/TopSearch'
import ProductBox from './Components/ProductBox';
import CardItem from '../../common/CardItem';
import SectionHeading from '../../common/SectionHeading';
import FontAwesome from '../../common/FontAwesome';
import {Link} from "react-router-dom";
import {RestaurantListingItem} from "../RestaurantListing/RestaurantListingItem";
import firebase from "firebase/compat";
import {config} from "@fortawesome/fontawesome-svg-core";
import * as admin from "../../firebase";
import {useAuth} from "../../contexts/AuthContext";


    export default function Main(){
        const [restaurants, setRestaurants] = useState([]);
        let user = useAuth().currentUser;
        console.log(user);
            if (user){
                return (
                    <>
                        <TopSearch />
                    </>
                );
            }else{
                return (
                    <>
                        <TopSearch />

                        <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
                            <Container>
                                <SectionHeading
                                    heading='Haben Sie schon einen Account?'
                                    subHeading='mit einem Account können Sie bequem und einfach Bestellungen aufgeben'
                                />
                                <Row>
                                    <Col sm={12} className="text-center">
                                        <Link to="/register">Erstellen Sie einen Account<FontAwesome icon='chevron-circle-right' /> </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </>
                );
            }

}


const options={
    responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000: {
            items: 4,
        },
        1200: {
            items: 4,
        },
    },

    lazyLoad: true,
    pagination: false.toString(),
    loop: true,
    dots: false,
    autoPlay: 2000,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}
