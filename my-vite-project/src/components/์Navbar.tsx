import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom py-3 px-4">
      <Container>
        <LinkContainer to="/pokemon-lists">
          <Navbar.Brand>Welcome to Pokemon shop!</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Item className="d-flex align-items-center">
              <span className="nav-link">Contact 123456</span>
              <span className="mx-2">|</span>
              <LinkContainer to="/track-order">
                <Nav.Link>Track your order</Nav.Link>
              </LinkContainer>
              <span className="mx-2">|</span>
              <LinkContainer to="/offers">
                <Nav.Link>All Offers</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
