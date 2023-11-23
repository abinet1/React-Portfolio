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
						<p style={{fontSize: "12px"}}>
							Software engineer with more than 4 years experience as web/software developer. I am a self-stater and motivated 
							person interested in data structures and algorithms to face real world problems.
						</p>
						<p style={{fontSize: "12px"}}> 
							I have studied Computer Science and engineering at ASTU . In my time at ASTU i have participated in ICPC (International 
							Collegiate Programming Contest) challenges for 4 rounds earned the <a href="https://drive.google.com/file/d/16eyt0_ve2SN06cbfPnP6H9kxtAsAU6ny/view">extreme programmer certification</a> . So far i have solved 
							300+ on <a href="https://open.kattis.com/users/abinet-tassew">kattis</a> , <a href="https://leetcode.com/abinettassewabi/">Leetcode</a> , 
							<a href="https://codeforces.com/abinettassewabi300">code force</a> and so on.
						</p>
						<Work />
					</Col>
		  		</Row>
      		</Container>
    	</section>
  	)
}

export default About;
