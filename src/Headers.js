import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Headers(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink activeClassName="active" className="nav-link" to="/dashboard">Home</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/aboutus">About Us</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/contactus">Contact Us</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/contactus">Go To See the New stores</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Headers;