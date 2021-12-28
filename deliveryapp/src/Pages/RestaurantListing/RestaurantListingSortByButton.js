import {Col, Dropdown, Row} from "react-bootstrap";
import React from "react";

export function RestaurantListingSortByButton() {
    return <Row className="d-none-m">
        <Col md={12}>
            <Dropdown className="float-right">
                <Dropdown.Toggle variant="outline-info">
                    Sort by: <span className="text-theme">Distance</span> &nbsp;&nbsp;
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu-right shadow-sm border-0'>
                    <Dropdown.Item href="#/distance">Distance</Dropdown.Item>
                    <Dropdown.Item href="#/no-of-coupons">No Of Offers</Dropdown.Item>
                    <Dropdown.Item href="#/rating">Rating</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <h4 className="font-weight-bold mt-0 mb-3">OFFERS <small className="h6 mb-0 ml-2">299
                restaurants
            </small>
            </h4>
        </Col>
    </Row>;
}