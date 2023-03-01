import Work from "./Work";
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import aboutImg from "../../images/q3.jpg"

const About=()=>{
  	return (
    	<section id="about" className="about">
      		<Container className="about-container">
          		<Row sm className="about-row">
			  		<Col className="about-col about-img">
						<img src={aboutImg} />
					</Col>
					<Col sm className="about-col">
						<h1>Some things About Me.</h1>
						<p>I'm Computer Science and engineering graguate with hands-on experience on Web and Software Development.</p>
						<Work />
					</Col>
		  		</Row>
      		</Container>
    	</section>
  	)
}

export default About;
