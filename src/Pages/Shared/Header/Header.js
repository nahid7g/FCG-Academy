import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">FCG Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                        <Nav.Link className='text-white' href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;