import {Badge, Button, Col, Container, Image, Row} from "react-bootstrap";
import Icofont from "react-icofont";
import React from "react";
import PrettifyAddress from "../../utils/AddressPrettifier";

export default function RestaurantDetailHeader(props) {

    return <section className="restaurant-detailed-banner">
        <div className="text-center">
            <Image fluid className="cover" src={props.backgroundImage}/>
        </div>
        <div className="restaurant-detailed-header">
            <Container>
                <Row className="d-flex align-items-end">
                    <Col md={8}>
                        <div className="restaurant-detailed-header-left">
                            <Image fluid className="mr-3 float-left" alt="osahan" src={props.profileImage}/>
                            <h2 className="text-white">{props.title}</h2>
                            <p className="text-white mb-1"><Icofont icon="location-pin"/> {PrettifyAddress(props.address)} <Badge variant="success">OPEN</Badge>
                            </p>
                            <p className="text-white mb-0"><Icofont icon="food-cart"/>
                                 {props.tags.map(tag => " "+tag + ",")}
                            </p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="restaurant-detailed-header-right text-right">
                            <Button variant='success' type="button"><Icofont icon="clock-time"/> 25–35 min
                            </Button>
                            <h6 className="text-white mb-0 restaurant-detailed-ratings">
	                           <span className="generator-bg rounded text-white">
	                              <Icofont icon="star"/> {props.rating}
	                           </span> 23 Ratings
                                <Icofont icon="speech-comments" className="ml-3"/> 91 reviews
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    </section>;
}