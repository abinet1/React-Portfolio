import "./Hero.css";
import profile_pic from "../../images/ppss.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Hero=()=>{

  return (
    <section className="hero" >
      <Container className="hero-container">

        <img className="hero-image" src={profile_pic} />
        <hr />
        <h1>Hello World</h1>
        <h3>I'm <span className="hero-name">Abinet</span></h3>
        <h3 className="longt">Web <span className="hero-occopation">Developer</span></h3>
        <span className="hero-button"><Button primery >Contact Me</Button></span>
      </Container>
    </section>
  )
}

export default Hero;
