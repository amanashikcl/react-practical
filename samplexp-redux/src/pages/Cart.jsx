import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  addToCart,
  decremenntQuantity,
  removeCartItem,
} from "../redux/cartSlice";
import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  const handleIncrement = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrement = (product) => {
    dispatch(decremenntQuantity(product));
  };

  const handleItemRemove = () => {
    dispatch(removeCartItem(removeItemIndex));
    setShow(false);
    toast.success("Items removed");
  };

  const [show, setShow] = useState(false);
  const [removeItemIndex, setRemoveItemIndex] = useState(null);
  const handleClose = () => {
    setRemoveItemIndex(null);
    setShow(false);
  };
  const handleShow = (index) => {
    setRemoveItemIndex(index);
    setShow(true);
  };

  const findTotal = () => {
    const totalPrice = cartItems.reduce((total, curr) => {
      const itemTotal = curr.price * curr.quantity;
      total += itemTotal;

      return total;
    }, 0);
    return totalPrice.toFixed(2);
  };
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h4>Cart Items</h4>
          </Col>
        </Row>
        {cartItems.length < 1 ? (
          <Row>
            <Col>
              <h4 className="text-center">Cart is empty</h4>
            </Col>
          </Row>
        ) : (
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
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div>
                            <h6>{item.title}</h6>
                            <small className="text-muted">${item.price}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="success"
                            onClick={() => handleIncrement(item)}
                          >
                            +
                          </Button>
                          <input
                            type="text"
                            value={item.quantity || 1}
                            readOnly
                            className="mx-2 text-center"
                            style={{ width: "50px" }}
                          />
                          <Button
                            variant="danger"
                            disabled={item.quantity < 2 ? true : false}
                            onClick={() => handleDecrement(item)}
                          >
                            -
                          </Button>
                        </div>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleShow(index)}
                        >
                          Remove
                        </Button>
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
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete cart items?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove cart items?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => handleItemRemove(removeItemIndex)}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
