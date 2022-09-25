import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ProductImg1 from "../Product/Product.jfif"
import ProductImg2 from "../Product/Product-2.jfif"
import ProductImg3 from "../Product/Product-3.jfif"
import ProductImg4 from "../Product/Product-4.jpeg"
import ProductImg5 from "../Product/Product-5.webp"
import ProductImg6 from "../Product/Product-6.jfif"

function Product() {
    return(
            <Container id="product">
                <h1 className="Product-title">Product</h1>
                 <Row>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg1}/>
                            <Card.Body>
                                <Card.Title>Wireless Router TENDA N300 F3</Card.Title>
                                <Card.Text>
                                Kondisi Barang Bekas
                                89% masih bisa di gunakan
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg2}/>
                            <Card.Body>
                                <Card.Title>Mikrotik RB951-2n 2,4Ghz</Card.Title>
                                <Card.Text>
                                Kondisi . Bekas masih Normal All Port

                                Kelengkapan. Unit Only
                                </Card.Text>
                                <Card.Text>
                                Spesifikasi RB951-2n
                                Product Code RB951-2n
                                Architecture MIPS-BE
                                CPU AR9331 300MHz
                                Current Monitor no
                                Main Storage/NAND 64MB
                                RAM 32MB
                                SFP Ports 0
                                LAN Ports 5
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg3}/>
                            <Card.Body>
                                <Card.Title>D-Link DIR-878 Wireless AC1900 MU-MIMO Giga Bit Router</Card.Title>
                                <Card.Text>
                                Kondisi . Bekas masih seperti baru
                                Kelengkapan. Unit Adaptor

                                Garansi personal 7 hari

                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg4}/>
                            <Card.Body>
                                <Card.Title>TP-Link Archer C60 AC1350 Woreless Dual Band - C50</Card.Title>
                                <Card.Text>
                                Support 2,4Ghz
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg5}/>
                            <Card.Body>
                                <Card.Title>STB ZTE B860H V1 Original</Card.Title>
                                <Card.Text>
                                TB B860H V1 Original belum Unlock
                                <p>Spek</p>
                                <p>Ram  :1Gb</p>
                                <p>Room :8Gb</p>
                                <br/>
                                Kondisi: normal barang seken jual apa adanya sudah tested tampil di tv
                                Kelengkapan Unit saja
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col className="Product">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={ProductImg6}/>
                            <Card.Body>
                                <Card.Title>Huawei HG8546M ONT WiFi 1x RJ45 1000Mb/s</Card.Title>
                                <Card.Text>
                                Kondisi. Bekas masih normal Kelengkapan . non adaptor
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>      
                    </Col>
                </Row>
            </Container>
    );
}
export default Product;
