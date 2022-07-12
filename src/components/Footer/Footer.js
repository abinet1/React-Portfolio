import "./Footer.css";
import Container from "react-bootstrap/Container"; 

const Footer=()=>{
    return (
        <section className="footer"> 
            <Container className="footer-container">
                <div className="footer-social">
                    <h6> Facebook</h6>
                    <h6> Gmail</h6>
                    <h6> Telegram</h6>
                    <h6> What's up</h6>
                </div>
                <div>
                    <img></img>
                    <div>
                        <h1>abinet</h1>
                        <p>paragraph</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Footer;