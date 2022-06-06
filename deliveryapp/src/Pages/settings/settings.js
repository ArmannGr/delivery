import React, {useEffect, useRef, useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import {Col, Container, Row, Nav} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {signOut, updateProfile, updateEmail, updatePassword} from "firebase/auth";
import {auth, db} from "../../firebase";
import {NavLink} from "react-router-dom";
import { doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearchLocation, faLock} from '@fortawesome/free-solid-svg-icons';
import {addressConverter} from "./AddressModel";
import {AddressComponent} from "./AddressComponent";

export default function Settings(){

    const emailRef = useRef();
    const surnameRef = useRef();
    const nameRef = useRef();
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const newPasswordRef2 = useRef();
    const nameAddressRef = useRef();
    const addressRef = useRef();
    const addressNumberRef = useRef();
    const postalCodeRef = useRef();
    const areaRef = useRef();
    let passwordCompare = true;
    const [address, getAddress] = useState([]);

    useEffect(() => {
            getAddressData();
        },
        []);

    const getAddressData = async () => {
        const queryForAddress = query(collection(db, "Address").withConverter(addressConverter), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(queryForAddress);
        getAddress(querySnapshot.docs.map(doc => doc.data()));
        console.log(address)
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });
    };

    const handleUpdateProfile = () => {
        console.log("existenz")
        updateEmail(auth.currentUser, emailRef.current.value).then(() => {
            console.log("email updated")
            // Email updated
        }).catch((error) => {
            console.log(error)
            // An error occurred
            // ...
        });

        updateProfile(auth.currentUser, {
            displayName: nameRef.current.value + " " + surnameRef.current.value
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(error);
        });

    }

    const handleUpdatePassword = () => {
        console.log("exists password")
        if (newPasswordRef.current.value === newPasswordRef2.current.value){
            console.log("passwort right");
            passwordCompare =true
            updatePassword(auth.currentUser, newPasswordRef.current.value).then(
                () => {
                    console.log("updated Password")
                }).catch((error) => {
                console.log(error);
            });
        }else{
            console.log("passwort false")
            passwordCompare =false;
        }


    }

    const handleSetAddress = async () => {
        const date = Date.now();
        console.log("setAddress exists")
        await setDoc(doc(db, "Address", auth.currentUser.uid + date), {
            name: nameAddressRef.current.value,
            address: addressRef.current.value,
            streetNumber: addressNumberRef.current.value,
            postalCode: postalCodeRef.current.value,
            area: areaRef.current.value,
            email: auth.currentUser.email,
            date: date
        });
        window.location.reload();
    }



    return(
        <div>
            <section className="pt-5 pb-5 homepage-search-block">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h1><FontAwesomeIcon icon={ faUser } /> Account</h1>
                            <div >
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FontAwesomeIcon icon={ faSearchLocation } /> Adresse</Card.Title>
                                        <div>
                                                        {
                                                            address && address.map(address => {
                                                                    return <AddressComponent addressData={address}/>
                                                                }
                                                            )
                                                        }

                                        </div>
                                        <Form>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputNameAddress" placeholder="Name" ref={nameAddressRef} required/>
                                                <Form.Label htmlFor="inputNameAddress">Name</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputAddressStreet" placeholder="Straße und Hausnummer" ref={addressRef} required/>
                                                <Form.Label htmlFor="inputAddressStreet">Straße</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputAddressStreetNumber" placeholder="Hausnummer" ref={addressNumberRef} required/>
                                                <Form.Label htmlFor="inputAddressStreetNumber">Hausnummer</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputArea" placeholder="PLZ" ref={postalCodeRef} required/>
                                                <Form.Label htmlFor="inputArea">PLZ</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputAreaName" placeholder="Ort" ref={areaRef} required/>
                                                <Form.Label htmlFor="inputAreaName">Ort</Form.Label>
                                            </div>
                                            <div>
                                            <Button variant="primary" onClick={handleSetAddress}>Daten speichern</Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card>
                                    <Card.Body>
                                            <Card.Title><FontAwesomeIcon icon={ faUser } /> Persönliche Daten</Card.Title>
                                        <Form>
                                            <div className="form-label-group">
                                                <Form.Control type="name" id="inputName" ref={nameRef} placeholder="Vorname" required/>
                                                <Form.Label htmlFor="inputName">Vorname</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="surname" id="inputSurname" placeholder="Surname" ref={surnameRef} required/>
                                                <Form.Label htmlFor="inputSurname">Name</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="email" id="inputEmail" placeholder="Email address" ref={emailRef} required/>
                                                <Form.Label htmlFor="inputEmail">Email Adresse</Form.Label>
                                            </div>
                                            <Button variant="primary" onClick={handleUpdateProfile}>Daten speichern</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FontAwesomeIcon icon={ faLock } /> Passwort ändern</Card.Title>
                                        <Form >
                                            <div className="form-label-group">
                                                <Form.Control type="password" id="inputPassword" ref={oldPasswordRef} placeholder="Altes Passwort" required/>
                                                <Form.Label htmlFor="inputPassword">Altes Passwort</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="password" id="inputPassword1" placeholder="Neues Passwort" ref={newPasswordRef} required/>
                                                <Form.Label htmlFor="inputPassword1">Neues Passwort</Form.Label>
                                            </div>
                                            <div className="form-label-group">
                                                <Form.Control type="password" id="inputPassword2" placeholder="Neues Passwort wiederholen" ref={newPasswordRef2} required/>
                                                <Form.Label htmlFor="inputPassword2">Neues Passwort wiederholen</Form.Label>
                                                {!passwordCompare && <a>neues Passwort stimmt mit der Wiederholung nicht überein</a>}
                                            </div>

                                            <Button variant="primary"  onClick={handleUpdatePassword}>Daten speichern</Button>
                                        </Form>
                                        <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
                                            <Button onClick={handleLogOut}>Ausloggen</Button>
                                        </Nav.Link>
                                    </Card.Body>
                                </Card>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}