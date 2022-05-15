import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import {useAuth} from "../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'







function Header(){
	let user = useAuth().currentUser
	const auth = getAuth();
	if(user){
		return (
			<div >
				<Navbar color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
					<Container>
						<Navbar.Brand to="/"><a href="/"><Image src="/img/transparentLogo.png" alt='' /></a></Navbar.Brand>
						<Navbar.Toggle/>
						<Navbar.Collapse id="navbarNavDropdown">
							<Nav activeKey={0} className="ml-auto" >
								<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
									<FontAwesomeIcon icon={ faHome } /> Home  <span className="sr-only">(current)</span>
								</Nav.Link>
								<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/settings">
									<FontAwesomeIcon icon={ faUser } /> Account
									<span className="sr-only">(current)</span>
								</Nav.Link>
								<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/orderhistory">
									<FontAwesomeIcon icon={ faPizzaSlice } /> Bestellungen <span className="sr-only">(current)</span>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
    	return (
    		<div >
			<Navbar color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><a href="/"><Image src="/img/transparentLogo.png" alt='' /></a></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" >
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/login">
							 Anmelden <span className="sr-only">(current)</span>
						 </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/register">
							  Registrieren <span className="sr-only">(current)</span>
						 </Nav.Link>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               Home<span className="sr-only">(current)</span>
			            </Nav.Link>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
}

export default Header;