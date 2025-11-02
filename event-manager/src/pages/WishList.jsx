import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { removeWish } from "../redux/wishListSlice";
import { toast } from "react-toastify";

function WishList() {
  const wishes = useSelector((state) => state.wishList?.items || []);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeWish(id));
    toast.success("Removed successfully");
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Your Wishlist</h3>
      <Row className="g-2">
        {wishes.length === 0 ? <p>No wishes yet.</p> : null}
        {wishes.map((place) => (
          <Col key={place.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src={place.image}
                height={160}
                alt={place.location}
              />
              <Card.Body>
                <Card.Title>{place.location || place.text}</Card.Title>
                <Button variant="danger" onClick={() => handleRemove(place.id)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default WishList;
