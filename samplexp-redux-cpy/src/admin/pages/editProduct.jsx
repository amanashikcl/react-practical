import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editProduct } from '../../redux/productSlice';

const EditProduct = () => {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.product.products || []);
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const schema = yup.object().shape({
    productName: yup.string('Enter string only').required('Product name is required'),
    productDescription: yup.string('Enter string only').required('Product description is required'),
    productPrice: yup.number('Enter a valid number').required('Product price is required'),
    productPhoto: yup.string('Enter a valid URL').required('Product photo is required'),
  });

  const handleProduct = (values) => {
    values.id = productId;

    dispatch(editProduct(values));
    toast.success('product updated successfully');
    navigate('/admin-listproducts');
  };

  if (!product) {
    return (
      <Container className="mt-5 w-50">
        <Row>
          <Col className="text-center">
            <h2>Product not found</h2>
            <Link to="/admin-listproducts" className="btn btn-secondary mt-3">Back to list</Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5 w-50">
      <Row>
        <Col className="text-center">
          <h2>edit product</h2>
        </Col>
      </Row>

      <Formik
        validationSchema={schema}
        onSubmit={handleProduct}
        initialValues={{
          productName: product.productName,
          productDescription: product.productDescription,
          productPrice: product.productPrice,
          productPhoto: product.productPhoto,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>product name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="product name"
                  name="productName"
                  onChange={handleChange}
                  isValid={touched.productName && !errors.productName}
                  isInvalid={!!errors.productName}
                  value={values.productName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>product description</Form.Label>
                <Form.Control
                  required
                  type as={'textarea'}
                  placeholder="product description"
                  name="productDescription"
                  onChange={handleChange}
                  isValid={touched.productDescription && !errors.productDescription}
                  isInvalid={!!errors.productDescription}
                  value={values.productDescription}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productDescription}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomemail">
                <Form.Label>product price</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    type="number"
                    placeholder="enter price"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="productPrice"
                    onChange={handleChange}
                    isValid={touched.productPrice && !errors.productPrice}
                    isInvalid={!!errors.productPrice}
                    value={values.productPrice}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.productPrice}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>product Photo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="upload product photo"
                  required
                  name='productPhoto'
                  onChange={handleChange}
                  isValid={touched.productPhoto && !errors.productPhoto}
                  isInvalid={!!errors.productPhoto}
                  value={values.productPhoto}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productPhoto}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>


            <Button
              type="submit"
            >
              Edit Product
            </Button>
          </Form>
        )}
      </Formik>

    </Container>
  );
}


export default EditProduct;
