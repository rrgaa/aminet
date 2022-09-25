import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import BackgroundImg from "../Images/Toko.jpeg"
import TrackVisibility from "react-on-screen";

function Welcome () {
const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Jual Mikrotik", "Services Mikrotik", "Jual Router" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row clasname="d-flex justify-content-end">
          <Col>
              <img src={BackgroundImg} className="Toko"></img>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome To Amien Net</span>
                <h1>{`Amien Net Melayani`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Jual Mikrotik", "Services Mikrotik", "Jual Router" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Alamat: Jl. Raya Bantarsari, Hulurawa, Kec. Ranca Bungur, Kabupaten Bogor, Jawa Barat 16310</p>
                  <Button variant="dark" className="fw-semibold" href="https://goo.gl/maps/fwu7Vq5NsiQHEoeu8">Maps</Button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    );
}

export default Welcome;