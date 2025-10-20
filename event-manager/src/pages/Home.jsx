import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(){
  const events = useSelector(state => state.events);
  return (
    <div style={{ marginTop: "20px" }}>
      <Row className="g-2" justify="center">
        {events.map(event => (
          <Col key={event.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center p-1">
            <Card style={{ width: '550px', margin: 0 }}>
              <Card.Img variant="top" width={"100%"} height={"300px"} src={event.image} />
              <Card.Body>
                <Card.Title>{event.location}</Card.Title>
                <Card.Text className="fw-bold">Price: {event.price}</Card.Text>
                <Card.Text>{event.description}</Card.Text>
                <Link to="/confirm">
                  <Button variant="primary">Book Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


export default Home;
