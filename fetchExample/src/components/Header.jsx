import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-info">
        <Container>
          <Navbar.Brand href="#home">Fetch Example</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
              <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
              <Nav.Link as={Link} to="/comments">Comments</Nav.Link>
              <Nav.Link as={Link} to="/Photos">Photos</Nav.Link>
              <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
