import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/productSlice";
import { useState } from "react";

const ListProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products);
  const [removeProduct, setRemoveProduct] = useState(null)
  const deleteProducts = (productIndex) => {
    dispatch(deleteProduct(removeProduct))
  }

  return (
    <Container>
      <Row>
        <Col className="text-center d-flex mt-4 justify-content-between pb-2">
          <h2>List Products</h2>
          <Link to="/admin-addproducts" className="btn btn-dark">
            Add Product
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products.length ? (
                products.map((pro, i) => (
                  <tr key={pro.id}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={pro.productPhoto}
                        alt={pro.productName}
                        style={{ width: 60, height: 40, objectFit: "cover" }}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{pro.productName}</td>
                    <td style={{ verticalAlign: "middle" }}>${pro.productPrice}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      <Link to={`/admin-editproduct/${pro.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                       <button onClick={deleteProducts}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ListProducts;