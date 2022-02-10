import {
    Button,
    ButtonToolbar,
    Col,
    Form,
    InputGroup,
    Nav,
    Row,
    Tab,
    ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import Icofont from "react-icofont";
import {Link} from "react-router-dom";
import React from "react";

export function CheckoutPayment() {
    return <div className="bg-white rounded shadow-sm p-4 osahan-payment">
        <h4 className="mb-1">Choose payment method</h4>
        <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={4} className="pr-0">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Link eventKey="first"><Icofont
                            icon="credit-card"/> Credit/Debit Cards</Nav.Link>
                        <Nav.Link eventKey="second"><Icofont icon="id-card"/> Food
                            Cards</Nav.Link>
                        <Nav.Link eventKey="third"><Icofont icon="card"/> Credit</Nav.Link>
                        <Nav.Link eventKey="fourth"><Icofont
                            icon="bank-alt"/> Netbanking</Nav.Link>
                        <Nav.Link eventKey="fifth"><Icofont icon="money"/> Pay on
                            Delivery</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={8} className="pl-0">
                    <Tab.Content className='h-100'>
                        <Tab.Pane eventKey="first">
                            <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
                            <p>WE ACCEPT <span className="osahan-card">
	                                       <Icofont icon="visa-alt"/> <Icofont icon="mastercard-alt"/> <Icofont
                                icon="american-express-alt"/> <Icofont icon="payoneer-alt"/> <Icofont
                                icon="apple-pay-alt"/> <Icofont
                                icon="bank-transfer-alt"/> <Icofont
                                icon="discover-alt"/> <Icofont icon="jcb-alt"/>
	                                       </span>
                            </p>
                            <Form>
                                <div className="form-row">
                                    <Form.Group className="col-md-12">
                                        <Form.Label>Card number</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="number"
                                                          placeholder="Card number"/>
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary"
                                                        type="button"
                                                        id="button-addon2"><Icofont
                                                    icon="card"/></Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="col-md-8">
                                        <Form.Label>Valid through(MM/YY)
                                        </Form.Label>
                                        <Form.Control type="number"
                                                      placeholder="Enter Valid through(MM/YY)"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-4">
                                        <Form.Label>CVV
                                        </Form.Label>
                                        <Form.Control type="number"
                                                      placeholder="Enter CVV Number"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-12">
                                        <Form.Label>Name on card
                                        </Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Enter Card number"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-12">
                                        <Form.Check
                                            custom
                                            type="checkbox"
                                            id="custom-checkbox1"
                                            label="Securely save this card for a faster checkout next time."
                                        />
                                    </Form.Group>
                                    <Form.Group className="col-md-12 mb-0">
                                        <Link to="/thanks"
                                              className="btn btn-success btn-block btn-lg">PAY
                                            $1329
                                            <Icofont icon="long-arrow-right"/>
                                        </Link>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h6 className="mb-3 mt-0 mb-3">Add new food card</h6>
                            <p>WE ACCEPT <span className="osahan-card">
	                                       <i className="icofont-sage-alt"></i> <i
                                className="icofont-stripe-alt"></i> <i
                                className="icofont-google-wallet-alt-1"></i>
	                                       </span>
                            </p>
                            <Form>
                                <div className="form-row">
                                    <Form.Group className="col-md-12">
                                        <Form.Label>Card number</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="number"
                                                          placeholder="Card number"/>
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary"
                                                        type="button"
                                                        id="button-addon2"><Icofont
                                                    icon="card"/></Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="col-md-8">
                                        <Form.Label>Valid through(MM/YY)
                                        </Form.Label>
                                        <Form.Control type="number"
                                                      placeholder="Enter Valid through(MM/YY)"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-4">
                                        <Form.Label>CVV
                                        </Form.Label>
                                        <Form.Control type="number"
                                                      placeholder="Enter CVV Number"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-12">
                                        <Form.Label>Name on card
                                        </Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Enter Card number"/>
                                    </Form.Group>
                                    <Form.Group className="col-md-12">
                                        <Form.Check
                                            custom
                                            type="checkbox"
                                            id="custom-checkbox"
                                            label="Securely save this card for a faster checkout next time."
                                        />
                                    </Form.Group>
                                    <Form.Group className="col-md-12 mb-0">
                                        <Link to="/thanks"
                                              className="btn btn-success btn-block btn-lg">PAY
                                            $1329
                                            <Icofont icon="long-arrow-right"/>
                                        </Link>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div
                                className="border shadow-sm-sm p-4 d-flex align-items-center bg-white mb-3">
                                <Icofont icon="apple-pay-alt" className="mr-3 icofont-3x"/>
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Apple Pay</h5>
                                    <p className="card-text">Apple Pay lets you order now &
                                        pay later at no extra cost.</p>
                                    <Link to="#" className="card-link font-weight-bold">LINK
                                        ACCOUNT <Icofont icon="link-alt"/></Link>
                                </div>
                            </div>
                            <div
                                className="border shadow-sm-sm p-4 d-flex bg-white align-items-center mb-3">
                                <Icofont icon="paypal-alt" className="mr-3 icofont-3x"/>
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Paypal</h5>
                                    <p className="card-text">Paypal lets you order now & pay
                                        later at no extra cost.</p>
                                    <Link to="#" className="card-link font-weight-bold">LINK
                                        ACCOUNT <Icofont icon="link-alt"/></Link>
                                </div>
                            </div>
                            <div
                                className="border shadow-sm-sm p-4 d-flex bg-white align-items-center">
                                <Icofont icon="diners-club" className="mr-3 icofont-3x"/>
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Diners Club</h5>
                                    <p className="card-text">Diners Club lets you order now
                                        & pay later at no extra cost.</p>
                                    <Link to="#" className="card-link font-weight-bold">LINK
                                        ACCOUNT <Icofont icon="link-alt"/></Link>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <h6 className="mb-3 mt-0 mb-3">Netbanking</h6>
                            <Form>
                                <ButtonToolbar>
                                    <ToggleButtonGroup className="d-flex w-100"
                                                       type="checkbox" name="options"
                                                       defaultValue={1}>
                                        <ToggleButton variant='info' value={1}>
                                            HDFC <Icofont icon="check-circled"/>
                                        </ToggleButton>
                                        <ToggleButton variant='info' value={2}>
                                            ICICI <Icofont icon="check-circled"/>
                                        </ToggleButton>
                                        <ToggleButton variant='info' value={3}>
                                            AXIS <Icofont icon="check-circled"/>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                                <hr/>
                                <div className="form-row">
                                    <Form.Group className="col-md-12">
                                        <Form.Label>Select Bank
                                        </Form.Label>
                                        <br/>
                                        <Form.Control as="select" className="custom-select">
                                            <option>Bank</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="col-md-12 mb-0">
                                        <Link to="/thanks"
                                              className="btn btn-success btn-block btn-lg">PAY
                                            $1329
                                            <Icofont icon="long-arrow-right"/></Link>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <h6 className="mb-3 mt-0 mb-3">Cash</h6>
                            <p>Please keep exact change handy to help us serve you
                                better</p>
                            <hr/>
                            <Form>
                                <Link to="/thanks"
                                      className="btn btn-success btn-block btn-lg">PAY $1329
                                    <Icofont icon="long-arrow-right"/></Link>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>;
}