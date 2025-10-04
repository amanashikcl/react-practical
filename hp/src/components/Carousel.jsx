import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <div style={{
            paddingLeft:"30px",
            paddingTop:"30px"}}>
            <h1>
              Unlock Exclusive <br /> HP Benifits-Just <br /> for You at Your{" "}
              <br />
              Nearest HP World <br />
              Store
            </h1>
            <h4>
              The future wont wait <br /> neither should you. <br />
              Upgrade to the all-new HP <br /> OmniBook AI PC
            </h4>
            <div>
              <button
                className=" btn-primary me-3 mb-2 btn-learn"
                style={{ padding: "10px 50px", fontSize: "16px" }}
              >
                Learn
              </button>
              <button
                className=""
                style={{ padding: "10px 30px", fontSize: "16px" }}
              >
                Request a callback
              </button>
            </div>
          </div>
          <img
            src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/hp-worldstores-benefits-desktop_2x.jpg"
            style={{
              height: "600px",
              width: "auto",
              objectFit: "cover",
              marginLeft: "auto",
            }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <div style={{
            paddingLeft:"30px",
            paddingTop:"30px"
          }}>
            <h1>
              With the right <br /> tools, homework doesnt have to <br />
              feel like work.
            </h1>
            <h4>
              Printers designed to bring <br />learning to life
            </h4>
            <div>
              <button
                className=" btn-primary me-3 mb-2 btn-learn"
                style={{ padding: "10px 50px", fontSize: "16px" }}
              >
                Learn
              </button>
              <button
                className=""
                style={{ padding: "10px 30px", fontSize: "16px" }}
              >
                Request a callback
              </button>
            </div>
          </div>
          <img
            src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/in-future-learning-desktop_2x.jpg"
            style={{
              height: "600px",
              width: "auto",
              objectFit: "cover",
              marginLeft: "auto",
            }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/2025-omen-max16-intel-desktop_2x.jpg"
          style={{ height: "600px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/banners/in-smart-tank-printers-desktop.jpg"
            style={{
              height: "600px",
              width: "auto",
              objectFit: "cover",
              marginLeft: "auto",
            }}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
