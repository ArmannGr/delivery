import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import { doc, deleteDoc } from "firebase/firestore";
import {auth, db} from "../../firebase";
import Card from "react-bootstrap/Card";

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

    return <div>
        <Card>
            <Card.Header>
                    {props.addressData.name} (Adresse)
            </Card.Header>
            <Card.Body>
        <Row>
        <Col sm={8}>
                            <div>
                                Name: {props.addressData.name}
                            </div>
                            <div>
                                Straße & Hausnummer: {props.addressData.address} {props.addressData.streetNumber}
                            </div>
                            <div>
                                PLZ: {props.addressData.postalCode}
                            </div>
                            <div>
                                Ort: {props.addressData.area}
                            </div>
        </Col>
        <Col>
            <Button onClick={() => onDelete(props.addressData)}><FontAwesomeIcon icon={ faTrash } /></Button>
        </Col>
        </Row>
            </Card.Body>
        </Card>
    </div>;
}