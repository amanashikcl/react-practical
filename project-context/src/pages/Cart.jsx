import { Button, Col, Container, Image, Row, Table , Form, Modal} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './Cart.css'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { addTocart, decrementQuantity, removeCartItem } from "../redux/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";



const Cart = () => {
    const [removeItemIndex, setRemoveItemIndex] = useState(null);

      const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }



  const handleShow = (index) => {
    setRemoveItemIndex(index);
    setShow(true);
  }

    const dispatch = useDispatch();
    const { cartitems } = useSelector((state) => state.cartitems);
   const findTotal =()=>{
   const cartTotal=  cartitems.reduce((total,curr)=>{
        const itemTotal = curr.productPrice * curr.quantity;
        total += itemTotal;
        return total;
    }, 0);
    return cartTotal;
   }
   const handleIncerment =(product)=>{
    dispatch(addTocart(product));
   }
   const handleDecrement =(product)=>{
    dispatch(decrementQuantity(product));
   }
   const deleteItem =(itemIndex)=>{
    toast.success("Item removed from cart 😒");
    dispatch(removeCartItem(removeItemIndex))
    setShow(false);
   }

    return (
        <>
  
        <Container className="mt-4">
            <Row>
                <Col>
                <h3>   CART ITEMS</h3>
                 
                </Col>
            </Row>
            {cartitems.length <1 ?(
                <Row>
                    <Col>
                    <h3 className="text-center">CART IS EMPTY</h3>
                    </Col>
                </Row>

            ):(
                   <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Product Name</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                {cartitems.map((items,index) => (
                            <tr key={index}>
                                <td>{index+1} </td>
                                <td>
                                    <div className="d-flex ">  <div><Image src={items.image} alt={items.title}  className="image-size"/></div>
                                       <div>
                                        <h5>{items.productName}</h5>
                                        <p>₹{items.productPrice} x {items.quantity} = ₹{items.productPrice * items.quantity}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex">
                                            <Button disabled={items.quantity <2 ? true : false} variant="danger" onClick={()=> handleDecrement(items)}>-</Button>
<Form.Control  type="text" value={items.quantity} readOnly className="quantity-field"/>
                                            <Button disabled={items.quantity >= 20 ? true : false} variant="success" onClick={()=> handleIncerment(items)}>+</Button>
                                    </div>
                                </td>
                                <td className="text-center align-middle"><Button className="bg-light text-black border-0"  onClick={()=>handleShow(index)}><RiDeleteBin6Fill /></Button></td>
                            
                            </tr>
                          
                ))}
                <tr>
                            <td colSpan={4} className="text-end"><h5>Total = {findTotal().toFixed(1)} </h5></td>
                </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            )}
         

        </Container>    

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove the item</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteItem}>
           Remove
          </Button>
        </Modal.Footer>
      </Modal>
          </>
    )
};

export default Cart;