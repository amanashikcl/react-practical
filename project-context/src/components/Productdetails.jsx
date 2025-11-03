import { ListGroup, Image, Button } from 'react-bootstrap'
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTocart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

function Productdetails() {

  const { id } = useParams()

  console.log(id)

  const { products } = useSelector((state) => state.product);

  const prod = products.find((pr) => pr.id === Number(id));

  const dispatch = useDispatch();

  const handleIncrement = () => {

    dispatch(addTocart(prod));
    toast.success("Added to cart successfully 😍");
  }

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
              <ListGroup.Item><h3>${prod.price}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.description}</h3></ListGroup.Item>
              <ListGroup.Item><Button onClick={handleIncrement}> Add To Cart</Button></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Productdetails;