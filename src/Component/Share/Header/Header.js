import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        className="py-3 "
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3>
              Lawyer Nobel
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <CustomLink className="nav-link" to="/">Home</CustomLink>
              <CustomLink className="nav-link" to="/checkout">Check Out</CustomLink>
              <CustomLink className="nav-link" to="/service">Service</CustomLink>
              <CustomLink className="nav-link" to="/blog">Blog</CustomLink>
              <CustomLink className="nav-link" to="/about">About Me</CustomLink>
            </Nav>

            <Nav>
              {user?.displayName || user?.email ? (
                <>
                  <CustomLink className="nav-link" to="/">{user?.displayName && user.displayName}</CustomLink>
                  <button onClick={logOut}>Log Out</button>
                </>
              ) : (
                <>
                  <CustomLink className="nav-link" to="/login">Login</CustomLink>
                  <CustomLink className="nav-link" eventKey={2} to="/signup">Sign Up</CustomLink>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
