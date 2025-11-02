import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { FaUserLarge } from "react-icons/fa6";
import { userLogout } from '../redux/userSlice';
import { toast } from 'react-toastify';





function Header() {
  const {cartitems} = useSelector((state) => state.cartitems);

  const {isAuthenticated} = useSelector((state)=> state.users);

  console.log("isAuthenticated", isAuthenticated);
const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout = () => {
      
dispatch(userLogout());
toast.success("user loggedout successfully")
      navigate('/login');
  } 
  return (
    <Navbar expand="lg" className="bk">
      <Container>
        <Navbar.Brand as={Link} to="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">PRODUCTS</Nav.Link>
            {/* <Nav.Link as={Link} to="/prodcut">products</Nav.Link> */}
            <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>

          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/contacts">CONTACT</Nav.Link>
           
            <Nav.Link as={Link} to="/cart" className='position-relative'><FaCartShopping />
              <span className='sp-nav'>{cartitems.length}</span>
            </Nav.Link >
             {!isAuthenticated ?(
                           <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
             ) : (
             <NavDropdown title={<FaUserLarge/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">New User</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin-listproducts">
                list products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/login' onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>             
             )}  

              

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;