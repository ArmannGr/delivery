import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Container, Form} from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from './ProductBox';

import CategoriesCarousel from '../../../common/CategoriesCarousel';

class TopSearch extends React.Component {
    state = {
        searchLocation: ""
    };

    render() {


        return (
            <section className="pt-5 pb-5 homepage-search-block">
                <Container className="">
                    <div className="d-flex justify-content-center">
                    <Row className="">
                        <Col >
                            <div className="">
                                <h1 className="font-weight-normal"><span className="font-weight-bold">Finden Sie die beliebtesten Restaurants</span> in
                                    ihrer Nähe</h1>
                                <h5 className="mb-5 text-secondary font-weight-normal">basierend auf Trends werden hier die top Restaurants in Ihrer nähe gezeigt.</h5>
                            </div>
                            <div className="homepage-search-form">
                                    <div className="form-row">
                                        <Form.Group className='col-lg-7'>
                                            <Form.Control type="text" placeholder="Geben Sie Ihre Stadt ein"
                                                          size='lg'
                                                          onChange={e => this.setState({searchLocation: e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className='col-lg-2'>
                                            <Link to={{
                                                pathname: '/listing',
                                                state: {
                                                    searchLocation: this.state.searchLocation
                                                }
                                            }} className="btn btn-primary btn-block btn-lg btn-gradient"
                                                  searchLocation="Test">Suchen</Link>
                                        </Form.Group>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
        );
    }
}

const options2 = {
    responsive: {
        0: {
            items: 2,
        },
        764: {
            items: 2,
        },
        765: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    autoplayTimeout: 2000,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplayHoverPause: true,
}

export default TopSearch;