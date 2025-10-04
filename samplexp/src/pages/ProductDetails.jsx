import { ListGroup, Image } from 'react-bootstrap'
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useParams } from 'react-router-dom'

function Productdetails({products}) {
    const {id} = useParams()
    console.log(id)

  const prod = products.find((pr) =>pr.id ===Number( id));

    console.log("-----------",prod)
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
            <Image src={prod.photo} alt="" />
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item><h3>{prod.name}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.price}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{prod.discription}</h3></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Productdetails;