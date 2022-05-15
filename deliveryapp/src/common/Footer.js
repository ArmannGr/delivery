import React from 'react';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,FormControl,Button,Image} from 'react-bootstrap';
import FontAwesome from './FontAwesome';
import {useAuth} from "../contexts/AuthContext";

function Footer(){

		let user = useAuth().currentUser;
		if (user){
			return (
				<>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-5 pb-5 text-center bg-white"></section>
					<section className="section pt-0 pb-5 text-center bg-white"></section>

					<footer className="pt-4 pb-4 text-center">
						<Container>
							<p className="mt-0 mb-0">© Copyright 2022 Foodiano All Rights Reserved</p>
						</Container>
					</footer>
				</>
			);
		}
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
						<p className="mt-0 mb-0">© Copyright 2022 Foodiano All Rights Reserved</p>
					</Container>
				</footer>
			</>
		);
}



export default Footer;