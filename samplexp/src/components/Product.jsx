import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Products({ pro, setCart }) {
  const handleIncrement = () => {
    setCart((prev) => prev + 1);
  };
  return (
    <>
      <Col md={6} lg={4} xl={3} xxl={2} className="mt-3">
        <Card>
          <Link to={`/productdetails/${pro.id}`}>
            <Card.Img variant="top" src={pro?.photo ?? ""} />
          </Link>
          <Card.Body>
            <Card.Title>{pro?.name ?? ""}</Card.Title>
            <h5>{pro?.price ?? ""}</h5>
            <Card.Text>{pro?.description ?? ""}</Card.Text>
            <Button variant="primary" onClick={handleIncrement}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Products;
