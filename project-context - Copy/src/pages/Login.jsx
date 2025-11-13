import React, { use, useContext, useState } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../context/UserContext';


function Login() {


  const [userlogindata, setUserlogindata] = useState({
    email: "",
    password: ""
  });
    const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const {loginUser} = useContext(UserContext);
  const Navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const user = users.find((u) => u.email === userlogindata.email)
  
  const handleChange = (e) => {

    setUserlogindata((prev) => {

      return {
        ...prev, [e.target.name]: e.target.value
      };
    })
  }
  const handleLogin = (event) => {

    event.preventDefault();

    const form = event.currentTarget;;

    if (form.checkValidity() === false) {

      console.log("inside ");

      event.stopPropagation();

      setValidated(true);
    }
    else {
      const user = users.find((u) => u.email === userlogindata.email);
      if (!user) {
        toast.error("invalid credentials");
        return
      }
      if (user.password !== userlogindata.password) {
        toast.error("invalid credentials");
        return
      }
      // update both Context and Redux so ProtectedRoute and Header agree
      loginUser(user);
      dispatch(userLogin(user));
      toast.success("login successful");
      Navigate("/")
    }
  }

  console.log(userlogindata);

  return (
    <Container
      className='mt-5 w-25'>
      <Row>
        <Col
          className='text-center'>
          <h2>
            Login
          </h2>
        </Col>
      </Row>
      <Row
        className='justify-content-center'>
        <Col>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleLogin}>
            <Form.Group
              className="mb-3"
              controlId="formGroupEmail">
              <Form.Label>
                Email address
              </Form.Label>

              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name='email'
                onKeyUp={(event) => { handleChange(event) }}
              />
              <Form.Control.Feedback
                type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label>
              Password
            </Form.Label>

            <Form.Group
              className="mb-3"
              controlId="formGroupPassword" >
              <Form.Control
                type="password"
                required
                placeholder="Password"
                name='password'
                onKeyUp={(event) => { handleChange(event) }}
              />
              <Form.Control.Feedback
                type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant='success'
              type='submit'
              className='w-100'>
              Login
            </Button>
         
          </Form>
   <Link to='/register' >
              <Button
                variant='link'
                className='w-100'>
                New User? Register Here
              </Button>
            </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Login