import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../redux/cartSlice';
import { toast } from 'react-toastify';


function Product({ pro, index }) {
    const dispatch = useDispatch();

    function handleIncrement(product) {
        dispatch(addTocart(product));
        toast.success("Added to cart successfully 😍");
    }

    return (
        <Col md={6} lg={4} xl={3} xxl={2} className="mt-3" key={index}>
            <Card >
                <Link to={`/product/${pro?.id ?? pro?.ID ?? ''}`}>
                    <Card.Img variant="top" src={pro?.productPhoto ?? pro?.productImage ?? pro?.image ?? null} />
                </Link>
                <Card.Body>
                    <Card.Title>{pro?.productName ?? pro?.productName ?? pro?.title ?? ""}</Card.Title>
                    <h5>₹{pro?.productPrice ?? pro?.price ?? ""}</h5>

                        <Button variant="primary" onClick={() => handleIncrement (pro)}>Add to Cart</Button>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Product