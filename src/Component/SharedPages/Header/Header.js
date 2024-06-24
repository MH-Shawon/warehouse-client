import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
      localStorage.removeItem('accessToken')
      signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          <span className="header-title">Cell-Phone</span>{" "}
          <span className="header-title2">WareHousE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center fw-bold">
            <Nav.Link className="text-white header-compo" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white header-compo" as={Link} to="/allphones">
            Phones
            </Nav.Link>
            
            {user ? (
              <div className="d-lg-flex">
                <Nav.Link
                  className="text-white header-compo"
                  as={Link}
                  to="/manageitems"
                >
                  Manage Items
                </Nav.Link>
                <Nav.Link
                  className="text-white header-compo"
                  as={Link}
                  to="/additem"
                >
                  Add Item
                </Nav.Link>
                <Nav.Link
                  className="text-white header-compo"
                  as={Link}
                  to="/ordercart"
                >
                  Cart
                </Nav.Link>
                <Nav.Link className="text-white header-compo" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
              </div>
            ) : (
              <div className="d-lg-flex">
            
            <Nav.Link className="text-white header-compo" as={Link} to="/upcoming">
              Upcoming
            </Nav.Link>
            
              </div>
            )}
          </Nav>

          <Nav className="text-center fw-bold">
            {user ? (
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleSignout}
                className="text-white header-compo"
              >
                Log Out
              </Nav.Link>
            ) : (
              <div className="d-lg-flex">
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-white header-compo"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/signup"
                  className="text-white header-compo"
                >
                  Sign Up
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;