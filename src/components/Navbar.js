import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../img/logo.png';
import user from './../img/User.png';
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // Array of paths where the background and shadow should be applied
  const pagesWithBackground = ["/about", "/products", "/gallery", "/contact", "login"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current page is in the list of pagesWithBackground
  const isPageWithBackground = pagesWithBackground.includes(location.pathname);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={` ${scrolled || isPageWithBackground ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width={148} height={123} className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-custom">
          <Nav className="ms-auto g-2 navlinks">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

            {/* Add Login, Signup, and Cart */}
            <img src={user}  className="user-image"/>
            <Nav.Link as={Link} to="/login" className="nav-link custom-border">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="nav-link custom-border">Signup</Nav.Link>

            <Nav.Link as={Link} to="/my-cart" className="nav-link  cart-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
