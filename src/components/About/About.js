import Work from "./Work";
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import aboutImg from "../../images/q2.jpg"

const About=()=>{
  	return (
    	<section className="about">
      		<Container className="about-container">
          		<Row sm className="about-row">
			  		<Col className="about-col">
						<img src={ aboutImg } />
					</Col>
					<Col sm className="about-col">
						<h1>Some things About Me.</h1>
						<p>I’m a web & soft­ware devel­op­er from Addis Ababa, Ethiopia.</p>
						<Work />
					</Col>
		  		</Row>
      		</Container>
    	</section>
  	)
}

export default About;
