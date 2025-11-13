import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useState } from "react";

const ListProducts = () => {
  const { products, removeProduct } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (productId) => {
    removeProduct(productId);
  };

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
              {products && products.length ? (
                products.map((pro, i) => (
                  <tr key={pro?.id ?? pro?.productId ?? pro?._id ?? i}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={pro.productPhoto}
                        alt={pro.productName}
                        style={{ width: 60, height: 40}}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{pro.productName}</td>
                    <td style={{ verticalAlign: "middle" }}>${pro.productPrice}</td>
                    <td style={{ verticalAlign: "middle" }}>
               <Link to={`/admin-editproduct/${pro?.id ?? pro?.productId ?? pro?._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
               <button onClick={() => handleDelete(pro?.id ?? pro?.productId ?? pro?._id)}>Delete</button>
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