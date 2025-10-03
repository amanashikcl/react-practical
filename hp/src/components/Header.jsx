import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"><Image src="/img/icon.png" alt="Logo" height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            
            </Nav>
            <Nav className="ms-auto ">
            <input type="search" className='ms-auto position-relative'  placeholder="Search HP.com" aria-label="Search" 
            style={{ paddingRight: '40px', width: '310px' }}/>
            <CiSearch size={30}  style={{ color: 'gray',  position: 'absolute', right: '300px', top: '50%', transform: 'translateY(-50%)' }} />
            <Nav.Link href="/cart"><FiShoppingCart size={30} /></Nav.Link>
            <Nav.Link href="/signin"><button className='bg-black text-white' style={{ width: '100px' }}>Sign in</button></Nav.Link>

            </Nav>
       
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;