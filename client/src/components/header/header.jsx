import React from "react";
import { Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		<nav className="nav-bar">
			{/* <Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/" className="custom-nav-link">
							Home
						</Link>
						<Link to="/portofolio" className="custom-nav-link">
							Portofolio
						</Link>
						<Link to="/about" className="custom-nav-link">
							About
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container> */}
			<div className="line"></div>
			<h2 className="logo-font">Grandma's Recipes</h2>
			<div className="line"></div>
		</nav>
	);
};

export default Header;
