import { Col, Container, Row } from "react-bootstrap";

function Service () {
    return (
        <div className="Service">
            <Container>
                <h2 className="text-center">Our Service</h2>
                <Row>   
                <Col>Service Mikrotik dan Router</Col>
                <Col>Jual Beli Mikrotik</Col>
                <Col>Jual Beli Router</Col>
                </Row>
            </Container>
        </div>
    );
}
export default Service;