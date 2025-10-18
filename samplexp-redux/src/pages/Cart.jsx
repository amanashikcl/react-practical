import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  const handleIncrement = (product)=>{
    dispatch(addToCart(product));
  }

  const findTotal = () =>{
    const totalPrice = cartItems.reduce((total, curr)=>{
      const itemTotal = curr.price * curr.quantity;
      total += itemTotal;

      return total;
    },0);
    return totalPrice.toFixed(2);
  }
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
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <img src={item.image} alt={item.title} style={{width: '50px', height: '50px', objectFit: 'cover'}} />
                        </div>
                        <div>
                            <h6>{item.title}</h6>
                            <small className="text-muted">${item.price}</small>
                        </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" size="sm" onClick={()=>handleIncrement(item)}>+</Button>
                    <input type="text" value={item.quantity || 1} readOnly className="mx-2 text-center" style={{width: '50px'}}/>
                    <Button variant="outline-secondary" size="sm">-</Button>
                    </div>
                  </td>
                  <td>
                    <Button variant="danger" size="sm">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mt-3 text-end">
            <h4>Total: ${findTotal()}</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
