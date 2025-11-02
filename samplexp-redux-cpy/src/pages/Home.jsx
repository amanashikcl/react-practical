
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

function Home() {
      const {products} = useSelector((state) => state.product);

      console.log("products-----", products);
      

    return (

        <>

            <Container>
                <Row>

                    {products.map((pro, index) => (
                        <Product pro={pro} key={index} 
                        />

                    ) )}


                </Row>

            </Container>
        </>
    )
}

export default Home