import './Skill.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Skill=()=>{
    return (
        <section id="skills" className="skill">
            <Container className="skill-container">
                <Row className='skill-container-header'>
                    <h1>Skills and Hobbies</h1>
                </Row>
                <Row >
                    <Col md className="divs">    
                        <h2>Back-end Web Development</h2>
                        <br />
                        <p>Python is my language of choice. The majority of my back-end development work are done in Python.<br />
                            I use Django, Django rest framework, and Flask as back-end frameworks.<br />
                            I'm studying Node and Express to expand to my current skill set.
                        </p>
                        <p>My goal is to work as a professional back-end developer.</p>
                        <br />
                        <span>Skills: </span>
                        <small className="skills">Python</small>
                        <small className="skills">Django</small>
                    </Col>
                    <Col md className="divs">    
                        <h2>Front-end Web Development</h2>
                        <br />
                        <p>I'm new to react. However, it is currently one of the finest front-end libraries I have used.<br/>
                            I use Adobe XD for designing and am proficient with HTML, CSS, JS, and Bootstrap.
                        </p>
                        <p>In front-end, I want to improve to the point where I can showcase my work. I suppose I don't mind working in front-end alongside back-end.</p>
                        <br />
                        <span>Skills: </span>
                        <small className="skills">React</small>
                        <small className="skills">HTML</small>
                        <small className="skills">CSS</small>
                        <small className="skills">JS</small>
                    </Col>
                </Row>
                <Row >
                    <Col md className="divs">    
                        <h2>Cloud</h2>
                        <br />
                        <p>My choise of cloud service provider is AWS. <br />
                            I am certifide cloud practitioner, and have experience on providing and configuring some of the core cloud service and monitoring on AWS.<br/>
                            I'm preparing to take aws associate solution architect certification to expand to my current skill set.
                        </p>
                        <p>My goal is to work as a professional devops experience.</p>   
                        <br />
                        <span>Skills: </span>
                        <small className="skills">AWS</small>
                        <small className="skills">AWS Cloud Practitioner</small>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}

export default Skill;
