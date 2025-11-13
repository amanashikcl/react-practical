import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiShoppingCart } from "react-icons/ci";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand as={Link} to="/home">ShopEasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex search-bar">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link as={Link} to="/cart" className="cart-icon">
              <CiShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
