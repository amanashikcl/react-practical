import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({ products }) {
    console.log(products)
    return (

        <>

            <Container>
                <Row>
                    {products.map((pro) => (
                        <Col md={6} lg={4} xl={3} xxl={2} className="mt-3">
                            <Card>
                                <Card.Img variant="top" src={pro?.photo ?? ""} />
                                <Card.Body>
                                    <Card.Title>{pro?.name ?? ""}</Card.Title>
                                    <h5>{pro?.price ?? ""}</h5>
                                    <Card.Text>
                                        {pro?.descriptionn ?? ""}
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    )

                    )}


                </Row>
            </Container>
        </>
    )
}

export default Home