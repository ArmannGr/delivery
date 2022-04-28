import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Container, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory} from "react-router-dom";


function Register () {

	const emailRef = useRef()
	const passwordRef = useRef()
	const {signUp} = useAuth()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const history = useHistory();

	async function handleSubmit(e){
		e.preventDefault();
		console.log("Working");
		try {
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		}catch(e) {
			console.log(e.toString());
			setError('Failed to create an account!');
		}
		setLoading(false);
	}

	return (
		<Container fluid className='bg-white'>
			<Row>
				<Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
				<Col md={8} lg={6}>
					<div className="login d-flex align-items-center py-5">
						<Container>
							<Row>
								<Col md={9} lg={8} className="mx-auto pl-5 pr-5">
									<h3 className="login-heading mb-4">New Buddy!</h3>
									{error && <Alert variant="danger">{error}</Alert>}

									<Form onSubmit={handleSubmit}>
										<div className="form-label-group">
											<Form.Control type="email" id="inputEmail" placeholder="Email address"
														  ref={emailRef} required/>
											<Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
										</div>
										<div className="form-label-group">
											<Form.Control type="password" id="inputPassword" placeholder="Password"
														  ref={passwordRef} required/>
											<Form.Label htmlFor="inputPassword">Password</Form.Label>
										</div>
										<Button type="submit" disabled={loading}
												className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign
											Up</Button>
										<div className="text-center pt-3">
											Already have an account? <Link className="font-weight-bold" to="/login">Sign
											In</Link>
										</div>
									</Form>
								</Col>
							</Row>
						</Container>
					</div>
				</Col>
			</Row>
		</Container>
	);
}


export default Register;