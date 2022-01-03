import Icofont from "react-icofont";
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import PrettifyAddress from "../../utils/AddressPrettifier";
import PrettifyOpeningHours from "../../utils/OpeningHoursPrettifier";
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

export default function RestaurantDetailInfo(props) {
    return <div id="restaurant-info"
                className="bg-white rounded shadow-sm p-4 mb-4">

        <Card  style={{ width: 'full' }}>
            <Card.Header>
                <Icofont
                    icon="info text-primary mr-2"/>
                Restaurant Info
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.restaurant.name}</Card.Title>
                <Card.Text>
                    <p className="mb-3">
                        <Icofont
                            icon="google-map text-primary mr-2"/>
                         {PrettifyAddress(props.restaurant.address)}
                    </p>


                    <p className="mb-3"><Icofont
                        icon="phone-circle text-primary mr-2"/>

                        {props.restaurant.phoneNumber}
                    </p>


                    <p className="mb-3"><Icofont
                        icon="email text-primary mr-2"/>

                        {props.restaurant.email}
                    </p>

                </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: 'full' }}>
            <Card.Header> <Icofont
                icon="clock-time text-primary mr-2"/>
                Opening Hours
            </Card.Header>
            <Card.Body>
            <Table responsive>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Opening Ours noon</th>
                    <th>Opening Ours afternoon</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Monday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[0]}</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[1]}</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[2]}</td>

                </tr>
                <tr>
                    <td>Thursday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[3]}</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[4]}</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[5]}</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td></td>
                    <td>{props.restaurant.openingHours[6]}</td>
                </tr>
                </tbody>
            </Table>
            </Card.Body>
        </Card>


            {/*PrettifyOpeningHours(props.restaurant.openingHours)*/}

            {/*<Badge variant="success" className='ml-1'> OPEN NOW </Badge>*/}
        <Card border="light" style={{ width: 'full' }}>
            <Card.Header>
                <Icofont
                    icon="tags text-primary mr-2"/>
                Tags
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p className="mb-3">{props.restaurant.tags.map(tag => " "+tag + ",")}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
        {/*<div className="border-btn-main mb-4">*/}

        {/*    <Link className="border-btn text-success mr-2" to="#"><Icofont*/}
        {/*        icon="check-circled"/> Breakfast</Link>*/}

        {/*</div>*/}
    </div>;
}