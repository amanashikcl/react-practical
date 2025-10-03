import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Home.css'

function Home(){
    return(
        <>  
            <Container className="mt-4">
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ marginBottom: '10px', color: 'black' }}>Hey there!</h1>
                    <div className='line'></div>
                    <h3 style={{ marginBottom: '0', color: 'black' }}>What can we help you find today?</h3>
                </div>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <div style={{ border: '2px solid black', textAlign: 'center', overflow:'hidden', position:'relative' }}>
                            <img 
                                src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/Mask-Group-278@2x.png" 
                                alt="First image"
                                className="img-fluid img-main"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <div className='img-caption' style={{ fontWeight: 'bold', paddingTop:"10px", color:"white" }}>Printers</div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="mb-3">
                        <div style={{ border: '2px solid black', textAlign: 'center', overflow:'hidden' }}>
                            <img 
                                src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/pcs-main.png" 
                                alt="Second image"
                                className="img-fluid img-main"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <div className='img-caption' style={{ fontWeight: 'bold', paddingTop:"10px", color:"white" }}>PCs</div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="mb-3">
                        <div style={{ border: '2px solid black', textAlign: 'center', overflow:'hidden' }}>
                            <img 
                                src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/Mask-Group-277@2x.png" 
                                alt="Third image"
                                className="img-fluid img-main"
                                style={{ width: '100%', height: '400px', objectFit: 'cover'  }}
                            />
                            <div className='img-caption' style={{ fontWeight: 'bold', paddingTop:"10px", color:"white" }}>Monitors and Accessories</div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* New Container with left image and right text/buttons */}
            <Container className="mt-5">
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <img 
                            src="https://www.hp.com/content/dam/sites/worldwide/homepage/images/workforce-services.jpg" 
                            alt="workforce"
                            className="img-fluid"
                            style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div style={{ padding: '0 20px' }}>
                            <h1 style={{ marginBottom: '20px', color: 'black', fontSize:"40px" }}>Boost productivity
                                <br></br> with HP Business
                                <br /> Solutions </h1>
                            <hr style={{ border: '1px solid black', margin: '20px 0' }} />
                            <p style={{ marginBottom: '20px', color: 'black', fontSize:'25px' }}>Partnering with you for commercial success by providing a full ecosystem of hardware, services and solutions  </p>
                            <div>
                                <button 
                                    className=" btn-primary me-3 mb-2 btn-learn"
                                    style={{ padding: '10px 50px', fontSize: '16px' }}
                                >
                                    Learn
                                </button>
                                <button 
                                    className=""
                                    style={{ padding: '10px 30px', fontSize: '16px' }}
                                >
                                   Request a callback
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;