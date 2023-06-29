import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const FooterComponent = () => {
    return (
        <footer>
        <Container fluid>
            <Row className="mt-5">
            <Col className="text-dark text-center py-5 footerColor">
                Copyright &copy; Don't Wary
            </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default FooterComponent;