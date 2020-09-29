import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {

	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from "reactstrap";
import Button from "./button";
import "./css/navbar.css"
// image
class AppNavbar extends Component {
	state = {
			isOpen: false,
			white: true
	        };
	        toggle = () => {
		        this.setState(prevState => ({
			        isOpen: !prevState.isOpen
		            }));
	                };

    render() {
		const {white} = this.state;
		return (
			<div >
			<Navbar light className="nav" expand="md">
			<NavbarBrand tag={NavLink} to="/" >
				<div className="logo">
					<h5>Logo</h5>
				</div>	
			</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
			{!this.props.hide ?
			<>
		  <Nav className=" ml-auto right" navbar>
			<NavItem>
			  <NavLink  to="/" className="nav-link link">About Us</NavLink>
			</NavItem>
			<NavItem>
              <NavLink  to="/" className="nav-link link">Blog</NavLink>
            </NavItem>
            <NavItem >
              <NavLink  to="/login" className="nav-link">
			  	<Button white={white}>Sign In</Button>
			 </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/signup">
			  <Button>Get Started</Button>
			  </NavLink>
            </NavItem>
          </Nav>
		  </>
		  : ""}
        </Collapse>
      </Navbar>
	</div>
		);
	}
}
  

  export default AppNavbar;
