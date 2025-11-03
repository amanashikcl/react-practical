import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container style={{ maxWidth: 600, marginTop: 20 }}>
      <h3>Login</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Login', values);
          setSubmitting(false);
          navigate('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" type="email" className="form-control" />
              <div className="text-danger"><ErrorMessage name="email"/></div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field name="password" type="password" className="form-control" />
              <div className="text-danger"><ErrorMessage name="password"/></div>
            </div>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
