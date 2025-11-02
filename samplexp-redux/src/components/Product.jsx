import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Products({ pro }) {
  const dispatch = useDispatch();

  const handleIncrement = (pro) => {
    dispatch(addToCart(pro));
    toast.success("Added to cart");
  };

  return (
    <>
      <Col md={6} lg={4} xl={3} xxl={2} className="mt-3">
        <Card>
          <Link to={`/productdetails/${pro.id}`}>
            <Card.Img variant="top" src={pro?.image ?? ""} />
          </Link>
          <Card.Body>
            <Card.Title>{pro?.title ?? ""}</Card.Title>
            <h5>{pro?.price ?? ""}</h5>
            <Card.Text>{pro?.description ?? ""}</Card.Text>
            <Button variant="primary" onClick={() => handleIncrement(pro)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Products;
