import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {


  const wishlist = useSelector((state)=>state.wishListReducer)

  const cart = useSelector((state)=>state.cartReducer)
  


  return (
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand href="#home" className='text-light'>e-Kart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
        <Nav>
          <Nav.Link>
            <Link style={{textDecoration:'none'}} to={'./cart'}>Cart
            <Badge bg="secondary" className='ms-2'>{cart.length}</Badge></Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link style={{textDecoration:'none'}} to={'./wish-list'}>Wish List
            <Badge bg="secondary" className='ms-2'>{wishlist.length}</Badge></Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header