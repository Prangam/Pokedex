import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarSecondary: React.FC = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFFFFF' }} className="py-3 px-4">
      <Container>
        <LinkContainer to="/pokemon-lists">
          <Navbar.Brand>
            <img
              src='/image/PokemonLogo.png' 
              height="40"
              alt="Pokémon"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search name Pokémon..."
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Item className="d-flex align-items-center">
              <span className="nav-link">Username</span>
              <span className="mx-2">|</span>
              <LinkContainer to="/pocket">
                <Nav.Link>Pocket</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSecondary;
