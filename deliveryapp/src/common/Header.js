import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image,Badge} from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle';
import CartDropdownHeader from '../common/CartDropdownHeader';
import CartDropdownItem from '../common/CartDropdownItem';
import Icofont from 'react-icofont';

class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false
	    };
	}
    setIsNavExpanded = (isNavExpanded) => {
      this.setState({ isNavExpanded: isNavExpanded });
    }
    closeMenu = () => {
      this.setState({ isNavExpanded: false });
    }

    handleClick = (e) => {
      if (this.node.contains(e.target)) {
        // if clicked inside menu do something
      } else {
        // If clicked outside menu, close the navbar.
        this.setState({ isNavExpanded: false });
      }
    }
  
	componentDidMount() {
	    document.addEventListener('click', this.handleClick, false);      
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClick, false);
	}
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><Image src="/img/transparentLogo.png" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
							 Restaurants <span className="sr-only">(current)</span>
						 </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
							 My Account <span className="sr-only">(current)</span>
						 </Nav.Link>
						 <Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
							 Warenkorb <span className="sr-only">(current)</span>
						 </Nav.Link>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;