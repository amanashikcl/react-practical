import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

const ListProducts = () => {
  return (
  <Container>
    <Row>
        <Col className="text-center d-flex mt-4 justify-content-between pb-2">
          <h2>List Products</h2>
          <Link to="/admin-addproducts" className="btn btn-dark">Add Product</Link>
        </Col>
    </Row>

    <Row>
      <Col>
        <Table striped bordered hover>
      <thead>
{}
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </Col>
    </Row>
  </Container>
  );
};
 export default ListProducts;