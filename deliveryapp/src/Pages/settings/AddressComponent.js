import React, {useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import CardItem from "../../common/CardItem";
import {getStorage} from "../../firebase";
import {getDownloadURL, ref} from "firebase/storage";

export function AddressComponent(props) {
    useEffect(() => {
            showData();
        },
        []);

const showData = () => {
    console.log(props.addressData)
}

const {data, addressData} = props

    return <Col md={4} sm={6} className="mb-4 pb-2">
        <div>
            <p>{props.addressData.address} {props.addressData.streetNumber}, {props.addressData.postalCode}, {props.addressData.area}, {props.addressData.name}</p>
        </div>
    </Col>;
}