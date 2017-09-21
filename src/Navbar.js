import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React Music Browser</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer to="/artists"><NavItem>Artists</NavItem></LinkContainer>
      <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
    </Nav>
  </Navbar>
);

export default Navigation;
