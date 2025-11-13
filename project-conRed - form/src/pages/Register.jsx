import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Register() {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {createUser} = useContext(UserContext);

  const schema = yup.object().shape({
    firstName: yup.string('Enter string only').required('First name is required').min(2, 'First name should be of minimum 2 characters length').max(20, 'First name should be of maximum 20 characters length'),
    lastName: yup.string('Enter string only').required('Last name is required').min(2, 'last name should be of minimum 2 characters length').max(20, 'last name should be of maximum 20 characters length'),
    email: yup.string('Enter string only').required('email is required'),
    password: yup.string('Enter string only').required('Password is required'),
    state: yup.string('Enter string only').required('State is required'),
    phone: yup.string('Enter string only').required('Phone number is required'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  const handleRegister = (values) => {
    values.id = Date.now();
    values.role = 'user';
    values.status = true;
    values.fullName = `${values.firstName ?? ''} ${values.lastName ?? ''}`.trim();
    createUser(values);
    dispatch(registerUser(values));
    toast.success('Registeration completed');
    navigate("/login")
  }

  return (
    <Container className="mt-5 w-50">
      <Row>
        <Col className="text-center">
          <h2>REGISTER HERE</h2>
        </Col>
      </Row>

      <Formik
        validationSchema={schema}
        onSubmit={handleRegister}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          state: '',
          phone: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                  value={values.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                  value={values.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomemail">
                <Form.Label>email</Form.Label>
                <InputGroup hasValidation>
                  
                  <Form.Control
                    type="email"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="email"
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                    value={values.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  required
                  name='password'
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  value={values.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  required
                  name='state'
                  onChange={handleChange}
                  isValid={touched.state && !errors.state}
                  isInvalid={!!errors.state}
                  value={values.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  required
                  name='phone'
                  onChange={handleChange}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={!!errors.phone}
                  value={values.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback={errors.terms}
                feedbackType="invalid"
                name="terms"
                onChange={handleChange}
                isValid={touched.terms && !errors.terms}
                isInvalid={!!errors.terms}
                value={values.terms}
              />

            </Form.Group>
            <Form.Group className="mb-3">
              <Link to='/login' >
                <Button
                  variant='link'
                >
                  Already have an account? Login Here
                </Button>
              </Link>
            </Form.Group>
            <Button
              type="submit"
            >
              REGISTER
            </Button>
          </Form>
        )}
      </Formik>

    </Container>
  );
}



export default Register


