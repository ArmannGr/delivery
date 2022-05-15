import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useAuth} from "../../contexts/AuthContext";
import LoadingOverlay from "react-loading-overlay";
import ClockLoader from "react-spinners/BeatLoader";

function Register() {
    const {signUp} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const formElements = document.forms['registration'];
        if (formElements.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setLoading(false);
            setValidated(true);
        } else {
            setValidated(false);
            try {
                const formData = {
                    address: {
                        street: formElements.elements['street'].value,
                        houseNumber: formElements.elements['houseNumber'].value,
                        postalCode: formElements.elements['postalCode'].value,
                        city: formElements.elements['city'].value,
                    },
                    name: formElements.elements['name'].value,
                    email: formElements.elements['email'].value,
                    number: formElements.elements['number'].value,
                    password: formElements.elements['password'].value
                };
                await signUp(formData);
                history.push('/');
            } catch (e) {
                console.log(e.toString());
                setError('Failed to create an account!');
            }
            setLoading(false);
        }
    }

    return (
        <LoadingOverlay
            active={loading}
            spinner={<ClockLoader color={"#fff"}/>}
        >
            <Container fluid className='bg-white'>
                <Col>
                    <div className="login d-flex align-items-center py-5">
                        <Container>
                            <Row>
                                <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                                    <h3 className="login-heading mb-4">New Buddy!</h3>

                                    <Form onSubmit={handleSubmit} id="registration" noValidated validated={validated}>
                                        <Form.Text className='font-weight-bold h5'>Persönliche Daten</Form.Text>

                                        <Form.Group className="form-label-group">
                                            <Form.Control required id='name' type='text'
                                                          placeholder='Vor- und Nachnamen eingeben'/>
                                            <Form.Label htmlFor="name">Vor- und Nachname</Form.Label>
                                            <Form.Control.Feedback type="invalid">Name ist
                                                erforderlich</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="form-label-group">
                                            <Form.Control required id='email' type='text'
                                                          placeholder='E-Mail eingeben'/>
                                            <Form.Label htmlFor="email">E-Mail</Form.Label>
                                            <Form.Control.Feedback type="invalid">E-mail ist
                                                erforderlich</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="form-label-group">
                                            <Form.Control required id='number' type='number'
                                                          placeholder='Telefonnummer eingeben'/>
                                            <Form.Label htmlFor="number">Telefonnummer</Form.Label>
                                            <Form.Control.Feedback type="invalid">Telefonnummer ist
                                                erforderlich</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="form-label-group">
                                            <Form.Control required type="password" id="password"
                                                          placeholder="Password"/>
                                            <Form.Label htmlFor="inputPassword">Password</Form.Label>
                                        </Form.Group>


                                        <Form.Text className='font-weight-bold h5'>Adresse</Form.Text>

                                        <Form.Row>
                                            <Col>
                                                <Form.Group className="form-label-group">

                                                    <Form.Control required id='street' type='text'
                                                                  placeholder='Straße eingeben'/>
                                                    <Form.Label htmlFor="street"
                                                                className='text-muted'>Straße</Form.Label>
                                                    <Form.Control.Feedback type="invalid">Straße ist
                                                        erforderlich</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="form-label-group">

                                                    <Form.Control required id='houseNumber' type='text'
                                                                  placeholder='Hausnummer eingeben'/>
                                                    <Form.Label htmlFor="houseNumber"
                                                                className='text-muted'>Hausnummer</Form.Label>
                                                    <Form.Control.Feedback type="invalid">Hausnummer ist
                                                        erforderlich</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row>

                                            <Col>
                                                <Form.Group className="form-label-group">

                                                    <Form.Control required id='postalCode' type='number'
                                                                  placeholder='Postleitzahl eingeben'/>
                                                    <Form.Label htmlFor="postalCode"
                                                                className='text-muted'>PLZ</Form.Label>
                                                    <Form.Control.Feedback type="invalid">Postleitzahl ist
                                                        erforderlich</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group className="form-label-group">

                                                    <Form.Control required id='city' type='text'
                                                                  placeholder='Stadt eingeben'/>
                                                    <Form.Label htmlFor="city"
                                                                className='text-muted'>Stadt</Form.Label>
                                                    <Form.Control.Feedback type="invalid">
                                                        Stadtname ist erforderlich
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>

                                        </Form.Row>


                                        <Button type="submit"
                                                className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2">Registrieren</Button>
                                        <div className="text-center pt-3">
                                            Ich habe bereits ein Konto!<Link className="font-weight-bold"
                                                                             to="/login">Einloggen</Link>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Container>
        </LoadingOverlay>
    );
}

export default Register;