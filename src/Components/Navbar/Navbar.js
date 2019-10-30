import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'

class Navigation extends Component {
    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand bsPrefix="navbar" className="brandItem" href="#home">The Knowledge Base</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link bsPrefix="navbar-item" className="navItem" href="#home">Home</Nav.Link>
                        <Nav.Link bsPrefix="navbar-item" className="navItem" href="#link">About</Nav.Link>
                        <Nav.Link bsPrefix="navbar-item" className="navItem" href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation