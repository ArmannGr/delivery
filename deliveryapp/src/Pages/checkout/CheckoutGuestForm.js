import React from 'react';
import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CheckoutGuestForm(props) {
    return (
        <Form className="pt-2 pb-2 m-2" id="guestForm" noValidated validated={props.validated}>
            <Card className="bg-white p-2">

                <Row className="d-flex align-items-center">
                    <Col>
                        <p className=".font-weight-light">Ich habe bereits ein Konto</p>
                    </Col>

                    <Col className="d-flex align-items-center justify-content-start">
                        <Button variant="primary">Anmelden</Button>
                    </Col>
                </Row>
                <hr/>

                <Form.Text className='font-weight-bold h5'>Lieferadresse</Form.Text>

                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className='text-muted'>Straße</Form.Label>
                            <Form.Control required id='street' type='text' placeholder='Straße eingeben'/>
                            <Form.Control.Feedback type="invalid">Straße ist erforderlich</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className='text-muted'>Hausnummer</Form.Label>
                            <Form.Control required id='houseNumber' type='text' placeholder='Hausnummer eingeben'/>
                            <Form.Control.Feedback type="invalid">Hausnummer ist erforderlich</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>

                    <Col>
                        <Form.Group>
                            <Form.Label className='text-muted'>PLZ</Form.Label>
                            <Form.Control required id='postalCode' type='number' placeholder='Postleitzahl eingeben'/>
                            <Form.Control.Feedback type="invalid">Postleitzahl ist erforderlich</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label className='text-muted'>Stadt</Form.Label>
                            <Form.Control required id='city' type='text' placeholder='Stadt eingeben'/>
                            <Form.Control.Feedback type="invalid">
                                Stadtname ist erforderlich
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                </Form.Row>
                <hr/>

                <Form.Text className='font-weight-bold h5'>Persönliche Daten</Form.Text>


                <Form.Group>
                    <Form.Label className="text-muted">Vor- und Nachname</Form.Label>
                    <Form.Control required id='name' type='text' placeholder='Vor- und Nachnamen eingeben'/>
                    <Form.Control.Feedback type="invalid">Name ist erforderlich</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="text-muted">E-Mail</Form.Label>
                    <Form.Control required id='email' type='text' placeholder='E-Mail eingeben'/>
                    <Form.Control.Feedback type="invalid">E-mail ist erforderlich</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="text-muted">Telefonnummer</Form.Label>
                    <Form.Control required id='number' type='number' placeholder='Telefonnummer eingeben'/>
                    <Form.Control.Feedback type="invalid">Telefonnummer ist erforderlich</Form.Control.Feedback>
                </Form.Group>
            </Card>
        </Form>

    );
}

export default CheckoutGuestForm;
