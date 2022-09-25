import { Col, Container, Row } from "react-bootstrap";

function Footer () {
    return(
        <div className="Footer">
            <Container className="text-light">
                <Row>
                    <h2 className="text-center fw-bold text-light pt-4">Amien Net</h2>
                </Row>
                <Row className="pt-5">
                    <Col>
                    <p>Jual Mikrotik</p>
                    <p>Jual Alat Elektronik</p>
                    <p>Jual Modem atau Router</p>
                    <p>Jual Voucher Amien Net dan MyWifi</p>
                    </Col>
                    <Col>
                    <p>Jl. Raya Bantarsari, Hulurawa, Kec. Ranca Bungur, Kabupaten Bogor, Jawa Barat 16310</p>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <p>Copyright &copy;2022 -レガー。All Right Reserved</p>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;