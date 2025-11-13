import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Home({ products }) {

  return (
    <Container className='flex-row'>
    <Col md={6} lg={4} xl={3} xxl={2} className="mt-3">
        <Row>
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img 
            variant="top" 
            src={product.image} 
            style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>
              ${product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Row>
    </Col>
  </Container>
  );
}

export default Home;