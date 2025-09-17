import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function ProductDetails(){
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