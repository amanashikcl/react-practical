import { ListGroup, Image, Button } from 'react-bootstrap'
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useParams } from 'react-router-dom'

function Productdetails({pro, setCart, products}) {
    const {id} = useParams()
    console.log(id)

  const prod = products.find((pr) =>pr.id ===Number( id));

    console.log("-----------",prod)

  const handleIncrement = () => {
    setCart((prev) => prev + 1);
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
              <ListGroup.Item><h3>{prod.price}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.description}</h3></ListGroup.Item>
               <ListGroup.Item><Button>Add to Cart</Button></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Productdetails;