import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carousels() {
  return (
    <Carousel>
    <Carousel.Item>
      <Image src="./images/11.jpg" alt="First slide" className="  w-100" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src="./images/22.jpg" alt="Second slide" className=" w-100" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src="./images/33.jpg" alt="Third slide" className="w-100" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;