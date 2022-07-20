import './Skill.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Skill=()=>{
    return (
        <section className="skill">
            <Container className="skill-container">
                <Row >
                    <Col sm className="divs">    
                        <h2>Mobile-friendly</h2>
                        <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                    </Col>
                    <Col sm className="divs">    
                        <h2>Mobile-friendly</h2>
                        <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                    </Col>
                    <Col sm className="divs">    
                        <h2>Mobile-friendly</h2>
                        <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                    </Col>
                    <Col sm className="divs">    
                        <h2>Mobile-friendly</h2>
                        <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skill;