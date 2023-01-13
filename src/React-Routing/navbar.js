import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Navs() {
  return (
    <div>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as ={Link} to="/" >Home</Nav.Link>
            <Nav.Link as ={Link} to="/about">About</Nav.Link>
            <Nav.Link  as= {Link} to="/service" >Service</Nav.Link>
            <Nav.Link as ={Link} to="/contact" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navs