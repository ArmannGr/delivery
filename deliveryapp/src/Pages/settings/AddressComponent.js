import React, {useEffect} from "react";
import {Col} from "react-bootstrap";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import { doc, deleteDoc } from "firebase/firestore";
import {auth, db} from "../../firebase";

export function AddressComponent(props) {
    useEffect(() => {
            showData();
        },
        []);

const showData = () => {
    console.log(props.addressData)
}


const onDelete = async (addressData) => {
    console.log(addressData);
    console.log(auth.currentUser.uid + addressData.date);
    await deleteDoc(doc(db, "Address", auth.currentUser.uid + addressData.date));
    window.location.reload();
}

    return <Col md={10} sm={4} className="mb-4 pb-2">
        <div>
            <p>Straße & Hausnummer: {props.addressData.address} {props.addressData.streetNumber}</p>
            <p>PLZ: {props.addressData.postalCode}</p>
            <p>Ort: {props.addressData.area}</p>
            <p>Name: {props.addressData.name}</p>
        </div>
        <div>
            <Button onClick={() => onDelete(props.addressData)}><FontAwesomeIcon icon={ faTrash } /></Button>
        </div>
    </Col>;
}