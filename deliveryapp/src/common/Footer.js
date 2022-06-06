import React from 'react';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,FormControl,Button,Image} from 'react-bootstrap';
import FontAwesome from './FontAwesome';

class Footer extends React.Component {

	render() {
    	return (
    		<>
			    <section className="section pt-5 pb-5 text-center bg-white">
			         <Container>
			            <Row>
			               <Col sm={12}>
			                  <h5 className="m-0">Haben Sie ein Restaurant? <Link to="login">Arbeiten Sie mit uns!</Link></h5>
			               </Col>
			            </Row>
			         </Container>
			    </section>
				<section className="section pt-5 pb-5 text-center bg-white"></section>
				<section className="section pt-5 pb-5 text-center bg-white"></section>
				<section className="section pt-5 pb-5 text-center bg-white"></section>

		      <footer className="pt-4 pb-4 text-center">
		         <Container>
		            <p className="mt-0 mb-0">{this.props.copyrightText}</p>
		         </Container>
		      </footer>
		    </>
    	);
    }
}


Footer.propTypes = {
  sectionclassName: PropTypes.string,
  popularCHclassName:PropTypes.string,
  popularCountries: PropTypes.array,
  popularFHclassName:PropTypes.string,
  popularFood: PropTypes.array,
  copyrightText: PropTypes.string,
  madewithIconclassName: PropTypes.string,
  firstLinkText: PropTypes.string,
  firstLink: PropTypes.string,
  secondLinkText: PropTypes.string,
  secondLink: PropTypes.string,
};

Footer.defaultProps = {
    sectionclassName: 'footer-bottom-search pt-5 pb-5 bg-white',
	popularCHclassName:'text-black',
	popularCountries: [],
	popularFHclassName:'mt-4 text-black',
	popularFood: [],
	copyrightText: '© Copyright 2022 Foodiano All Rights Reserved',
	madewithIconclassName: 'heart heart-icon text-danger',
	firstLinkText: 'Gurdeep Osahan',
	firstLink: "//www.instagram.com/iamgurdeeposahan/",
	secondLinkText: 'Askbootstrap',
	secondLink: '//askbootstrap.com/',
}



export default Footer;