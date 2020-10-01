import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {

	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu
} from "reactstrap";
import "./css/navbar.css"
import Button from "../common/button"
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
	logout() {
		this.props.logout();
	}

	render() {
		// const { white } = this.state;
		const { user, token } = this.props;
		// const { toggle, isOpen } = this.state;
		return (
			<div >
				<Navbar dark className="nav" expand="md">
					<NavbarBrand tag={NavLink} to="/" >
						<div className="logo"><h2>LORE</h2></div>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="/" className="nav-link link">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link link" to="/products">Blog</NavLink>
							</NavItem>
							{token ?
								<NavItem>
									<NavLink to={`/`} className="nav-link link">
										Resources
								</NavLink>
								</NavItem>
								: ""}
							{token ? (
								<UncontrolledDropdown nav inNavbar >
									<DropdownToggle nav caret  className="link">
										Hi {user && user.username}
									</DropdownToggle>
									<DropdownMenu right >
										<DropdownItem >
											<NavLink to="/" className="nav-link ">Edit Profile</NavLink>
										</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>
											<NavLink to="/logout" className="nav-link">Logout</NavLink>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							) : (
								<Nav className=" ml-auto right" navbar>
								<NavItem >
								  <NavLink  to="/login" className="nav-link">
									  <Button className="new" white={true}>Sign In</Button>
								 </NavLink>
								</NavItem>
								<NavItem>
								  <NavLink className="nav-link" to="/signup">
								  <Button>Get Started</Button>
								  </NavLink>
								</NavItem>
							  </Nav>
								)}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	const { isLoggedIn, token, user } = state.auth;
	return {
		token, user, isLoggedIn
	}
}
export default connect(
	mapStateToProps
)(AppNavbar);

