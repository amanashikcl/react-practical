import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";


function ProductDetails({products}){

    const {id} = useParams();
    console.log(id);
    return(
        <Container>
            <Row>
                <Col md={5}>
                    Left
                </Col>
                <Col md={7}>
                    Right
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;