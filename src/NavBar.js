import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// function NavBar(props) {
//     return (
//         <div>
//             <Navbar bg="light" expand="lg">
//                 <Container>
//                     <Navbar.Brand href="#home">My Shop</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto">

//                             <NavLink activeClassName="active" className="nav-link" to="/dashboard">DashBoard</NavLink>
//                             <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
//                             <NavLink activeClassName="active" className="nav-link" to="/aboutus">About Us</NavLink>
//                             <NavLink activeClassName="active" className="nav-link" to="/contactus">Contact Us</NavLink>

//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// }

// export default NavBar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
function NavBar(props) {
    return (
        <div>
         
                      <Navbar bg="light" expand="lg">
                 <Container>
                     <Navbar.Brand href="#home">My Shop</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">

                         <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
                             <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
                             <NavLink activeClassName="active" className="nav-link" to="/about">About Us</NavLink>
                             <NavLink activeClassName="active" className="nav-link" to="/contactus">Contact Us</NavLink>
                             <NavLink activeClassName="active" className="nav-link" to="/forms">Forms</NavLink>
                     
                         </Nav>
                     </Navbar.Collapse>
                 </Container>
            </Navbar>
    
        </div>
    );
}

export default NavBar;