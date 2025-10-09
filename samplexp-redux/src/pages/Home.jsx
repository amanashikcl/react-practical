
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Products from "../components/Product";

function Home({ products, setCart }) {
 

  return (
    <>
      <Container>
        <Row>
          {products.map((pro, i) => (
            <Products pro={pro} setCart={setCart} key={i}/>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
