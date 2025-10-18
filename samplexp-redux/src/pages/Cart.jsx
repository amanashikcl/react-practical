import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h4>Cart Items</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
