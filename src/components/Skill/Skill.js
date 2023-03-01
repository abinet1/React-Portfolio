import './Skill.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Skill=()=>{
    return (
        <section className="skill">
            <Container className="skill-container">
                <Row >
                    <Col md className="divs">    
                        <h2>Back-end Web Development</h2>
                        <br />
                        <p>Python is my language of choice. The majority of my back-end development work are done in Python.<br />
                            I use Django, Django rest framework, and Flask as back-end frameworks.<br />
                            I'm studying Node and Express to expand to my current skill set.
                        </p>
                        <p>My goal is to work as a professional back-end developer.</p>
                    </Col>
                    <Col md className="divs">    
                        <h2>Front-end Web Development</h2>
                        <br />
                        <p>I'm new to react. However, it is currently one of the finest front-end libraries I have used.<br/>
                            I use Figma and Adobe XD for designing and am proficient with HTML, CSS, JS, and Bootstrap.
                        </p>
                        <p>In front-end, I want to improve to the point where I can showcase my work. I suppose I don't mind working in front-end alongside back-end.</p>
                    </Col>
                </Row>
                <Row >
                    <Col md className="divs">    
                        <h2>Game Development</h2>
                        <br />
                        <p>Python is my language of choice for back-end development. <br />
                            I use Django, the Django rest framework, and Flask as developed back-end frameworks.<br/>
                            I'm studying Node and Express to expand to my current skill set.
                        </p>
                        <p>My goal is to work as a professional back-end developer.</p>
                    </Col>
                    <Col md className="divs">    
                        <h2>ML and Data Analysis</h2>
                        <br />
                        <p>Python is my language of choice for back-end development. <br />
                            I use Django, the Django rest framework, and Flask as developed back-end frameworks.<br />
                            I'm studying Node and Express to expand to my current skill set.
                        </p>
                        <p>My goal is to work as a professional back-end developer.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skill;