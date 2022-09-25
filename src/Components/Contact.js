import { Button, Col, Container, Row } from "react-bootstrap";
import TokpedImg from "../Images/TokPed.png"
function Contact () {
    return(
        <div className="Contact">
            <Container>
                <h2 className="text-center">Our Contact</h2>
                <Row className="Tokped pt-5">
                    <Col className="d-flex justify-content-between pt-5 text-center">
                        <img src={TokpedImg} alt="Tokped" className="TokpedImg"></img>
                        <p className="fs-3 fw-semibold text-center">Amien_Net</p>
                        <Button href="https://tokopedia.link/USXW8YvkAtb" className="Button-1 btn-success text-center" >Tokopedia</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;