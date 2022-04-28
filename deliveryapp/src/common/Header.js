import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import {useAuth} from "../contexts/AuthContext";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { getAuth, signOut } from "firebase/auth";



function Header(){
	let user = useAuth().currentUser
	const [open, setOpen] = React.useState(false);
	const auth = getAuth();

	const handleLogOut = () => {
		setOpen(false);
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	};

	const handleClickToOpen = () => {
		setOpen(true);
	};

	const handleToClose = () => {
		setOpen(false);
	};
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
									<Button> Home <span className="sr-only">(current)</span></Button>
								</Nav.Link>
								<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
									<Button
											onClick={handleClickToOpen}>
										Account
									</Button>
								</Nav.Link>
								<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/orderhistory">
									<Button> Warenkorb <span className="sr-only">(current)</span></Button>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div>
					<Dialog open={open} onClose={handleToClose}>
						<DialogTitle>{"Möchten Sie sich Abmelden?"}</DialogTitle>
						<DialogActions>
							<Button onClick={handleLogOut } color="primary" autoFocus>
								Abmelden
							</Button>
							<Button onClick={handleToClose}
									>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</div>
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
							 <Button>Anmelden <span className="sr-only">(current)</span></Button>
						 </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/register">
							 <Button> Registrieren <span className="sr-only">(current)</span></Button>
						 </Nav.Link>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               <Button>Home<span className="sr-only">(current)</span></Button>
			            </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/orderhistory">
							<Button> Warenkorb <span className="sr-only">(current)</span></Button>
						 </Nav.Link>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
}

export default Header;