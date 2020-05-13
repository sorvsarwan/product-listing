import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img className="logo" src="assets/images/logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#home-living">HOME & LIVING</Nav.Link>
            <Nav.Link href="#essentials">ESSENTIALS</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
}

export default Header;