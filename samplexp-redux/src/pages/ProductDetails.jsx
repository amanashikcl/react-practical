import { ListGroup, Image, Button } from 'react-bootstrap'
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice';
import { useParams } from 'react-router-dom'



function Productdetails({}) {
 const { products } = useSelector((state) => state.product);
 const {id} = useParams()
  const prod = products.find((pr) =>pr.id ===Number(id));

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };



  return (
    <Container>
      {!prod ? (
        <Row>
          <Col>
            product not found
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={prod.image} alt="" />
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item><h3>{prod.title}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.price}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.description}</h3></ListGroup.Item>
               <ListGroup.Item><Button onClick={handleAddToCart}>Add to Cart</Button></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Productdetails;