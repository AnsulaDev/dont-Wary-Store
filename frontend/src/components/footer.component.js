import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const FooterComponent = () => {
    return (
        <footer >
            <div className="bg-light  ">
                <div className="container mt-5">
                            <div className="row pt-4">
                                <div className="col-md-6 col-lg-5 col-12 ">
                                    <h3 className="headerFooter ">Don't Wary</h3>
                                    <p className="tf">Don't Wary is a place where you can find all the things that you need to build your dream PC, from CPUs to graphics cards, from RAM to SDD, etc. You will get everything in here! </p>
                                    <div className="footer-icons mb-3 tf">
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-instagram"></i>
                                        <i className="bi bi-twitter"></i>
                                    
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-12 ">
                                    <h5 className="headerfooterColor">Infromation</h5>
                                
                                    <div className="d-flex  flex-column list tf"> 
                                        <a className="" href="/"> {">"} About Us</a>
                                        <a className="" href="/"> {">"} Contact Us</a>
                                        <a className="" href="/"> {">"} Services</a>
                                        <a className="" href="/"> {">"} Products</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-12 ">
                                    <h5 className="headerfooterColor">Contact Us</h5>
                                    <p><i className="bi bi-phone-fill"></i> <span className="tf">+910000000</span></p>
                                    <p><i className="bi bi-envelope-fill"></i> <span className="tf">ansula@gmail.com</span> </p>
                                    <p><i className="bi bi-geo-alt-fill"></i> <span className="tf">guwahati</span></p>
                                </div>
                            </div>
                        </div>
            </div>
        <Container fluid >
            <Row >
            <Col className="text-dark text-center py-4 footerColor " >
                Copyright &copy; <span className="footerFont">Don't Wary</span>
            </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default FooterComponent;