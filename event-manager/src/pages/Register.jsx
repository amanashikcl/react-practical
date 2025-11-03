import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export default function Register() {
  const navigate = useNavigate();

  return (
    <Container style={{ maxWidth: 600, marginTop: 20 }}>
      <h3>Register</h3>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting }) => {
          // keep it simple: just log and navigate
          console.log('Register', values);
          setSubmitting(false);
          navigate('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field name="name" className="form-control" />
              <div className="text-danger"><ErrorMessage name="name"/></div>
            </div>

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

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <Field name="confirmPassword" type="password" className="form-control" />
              <div className="text-danger"><ErrorMessage name="confirmPassword"/></div>
            </div>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
