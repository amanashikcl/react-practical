
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Products from "../components/Product";
import { useSelector } from "react-redux";

function Home({ setCart }) {
 
  const {products} = useSelector((state) => state.product)

  return (
    <>
      <Container>
        <Row>
          {products.map((pro, i) => (
            <Products pro={pro} key = {i} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
