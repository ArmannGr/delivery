import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import PrettifyAddress from "../../utils/AddressPrettifier";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getOrderHistory} from "../Detail/cartService";
import {useAuth} from "../../contexts/AuthContext";

export default function OrderHistory() {

    const [orderHistory, SetOrderHistory] = useState([]);
    const {currentUser} = useAuth();

    function GetOrderHistory() {
        const history = [
            {
                items: [
                    {
                        name: 'Pizza',
                        price: '6.25',
                        quantity: 3,
                    },
                    {
                        name: 'Lasagna',
                        price: '8.99',
                        quantity: 3,
                    }
                ],
                restaurant: {
                    restaurantName: 'Foodiano Restaurant',
                    profileImage: 'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Femiliano-vittoriosi-OFismyezPnY-unsplash.jpg?alt=media&token=cddc368c-9751-4453-aee6-d40a05f98fec',
                    address: {
                        city: 'Hamm',
                        street: 'Lange',
                        postalCode: '59067',
                        houseNumber: '7',
                        state: "NRW"
                    }
                },
                date: '1641909622523',
                orderID:'867GXe69nAUdadfmRicmzNMD81Q2M48VNjHKV1flRgV1AfPO'
            },
            {
                items: [
                    {
                        name: 'Pizza',
                        price: '6.25',
                        quantity: 3,
                    },
                    {
                        name: 'Lasagna',
                        price: '8.99',
                        quantity: 3,
                    }
                ],
                restaurant: {
                    restaurantName: 'Foodiano Restaurant',
                    profileImage: 'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Femiliano-vittoriosi-OFismyezPnY-unsplash.jpg?alt=media&token=cddc368c-9751-4453-aee6-d40a05f98fec',
                    address: {
                        city: 'Hamm',
                        street: 'Lange',
                        postalCode: '59067',
                        houseNumber: '7',
                        state: "NRW"
                    }
                },
                date: '1641909622523',
                orderID:'867GXe69nAUdadfmRicmzNMD81Q2M48VNjHKV1flRgV1AfPO'
            }
        ];
        SetOrderHistory(history);
    }

    useEffect(() => {
        getOrderHistory(currentUser.uid,SetOrderHistory);
    },[]);

    return (
        <Container className="mt-4 mb-4">
            <p>Dein Bestellungsverlauf</p>
            <ListGroup>
                {orderHistory && orderHistory.map(history =>
                    <Link to={{
                        pathname:'/trackorder',
                        state:{
                            orderID:history.orderID
                        }
                    }} >
                        <ListGroup.Item className="d-flex justify-content-start align-items-start">
                            <div>
                                <Image className="avatar-small" roundedCircle src={history.restaurant.profileImage}/>
                            </div>
                            <div className="ms-2 me-auto ml-4">
                                <p className="font-weight-bold">{history.restaurant.restaurantName}</p>
                                <p className="font-weight-normal">{PrettifyAddress(history.restaurant.address)}</p>
                                <div>
                                    {history.items.map(item => <p className="font-weight-lighter">
                                        {`${item.name} - ${item.quantity}X`}
                                    </p>)}
                                </div>
                            </div>
                        </ListGroup.Item>
                    </Link>
                )}
            </ListGroup>
        </Container>
    );
}
//
// <ListGroup.Item
//     as="li"
//     className="d-flex justify-content-between align-items-start"
// >
//     <div className="ms-2 me-auto">
//         <div className="fw-bold">Subheading</div>
//         Cras justo odio
//     </div>
//     <Badge variant="primary" pill>
//         14
//     </Badge>
// </ListGroup.Item>