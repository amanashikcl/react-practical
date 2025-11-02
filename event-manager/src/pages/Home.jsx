import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWish } from "../redux/wishListSlice";
import { toast } from "react-toastify";

function Home() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const handleAddWish = (wish) => {
    dispatch(addWish(wish));
    toast.success("Added successfully");
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Row className="g-2" justify="center">
        {events.map((event) => (
          <Col
            key={event.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center p-1"
          >
            <Card style={{ width: "550px", margin: 0 }}>
              <Card.Img
                variant="top"
                width={"100%"}
                height={"300px"}
                src={event.image}
              />
              <Card.Body>
                <Card.Title>{event.location}</Card.Title>
                <Card.Text className="fw-bold">Price: {event.price}</Card.Text>
                <Card.Text>{event.description}</Card.Text>
                <div className="d-flex gap-2">
                  <Link to="/confirm">
                    <Button variant="primary">Book Now</Button>
                  </Link>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleAddWish(event)}
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
