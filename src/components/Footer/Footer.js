import footerImg from "../../images/about-img1.png";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UilFacebookF from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilTelegram from '@iconscout/react-unicons/icons/uil-telegram';
import UilWhatsup from '@iconscout/react-unicons/icons/uil-whatsapp';

const Footer=()=>{
    return (
        <section className="footer"> 
            <Container className="footer-container">
                <Container className="footer-body">
                    <Row>
                        <Col sm> 
                            <img src={footerImg} ></img>
                        </Col>
                        <Col sm className="footer-message">
                            <h1>Abinet</h1>
                            <p>I very very enthusiastic when it come programming, data science and development.</p>
                            <p>If you have any feedback regarding my portfolio or would want to discuss a different idea, please get in touch.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-social">
                    <UilFacebookF size="70" color="#61DAFB" />
                    <UilEnvelope size="70" color="#61DAFB" />
                    <UilTelegram size="70" color="#61DAFB" />
                    <UilWhatsup size="70" color="#61DAFB" />
                </div>
            </Container>
        </section>
    );
};

export default Footer;