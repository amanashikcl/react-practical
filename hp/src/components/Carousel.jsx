import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '600px', overflow: 'hidden' }}>
          <div>
            nkasdnsn
          </div>
          <img src='https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/hp-worldstores-benefits-desktop_2x.jpg'
              style={{
                height:'600px', 
                width: 'auto',
                objectFit: 'cover',
                marginLeft: 'auto'
              }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '600px', overflow: 'hidden' }}>
          <img src='https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/in-future-learning-desktop_2x.jpg'
              style={{
                height:'600px', 
                width: 'auto',
                objectFit: 'cover',
                marginLeft: 'auto'
              }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/2025-omen-max16-intel-desktop_2x.jpg'
            style={{height:'600px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '600px', overflow: 'hidden' }}>
          <img src='https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/in-smart-tank-printers-desktop.jpg'
              style={{
                height:'600px', 
                width: 'auto',
                objectFit: 'cover',
                marginLeft: 'auto'
              }}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;