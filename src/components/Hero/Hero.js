import "./Hero.css";
import profile_pic from "../../images/ppss.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero=()=>{
  return (
    <Container>
      <section className="hero">
        <img className="hero-image" src={profile_pic} />
        <hr />
        <h1>Hello</h1>
        <h2>I'm <span className="hero-name">Abinet</span></h2>
        <h2>Web <span className="hero-occopation">Developer</span></h2>
        <div className="hero-button"><Button primery >Contact Me</Button></div>
      </section>
    </Container>
  )
}

export default Hero;
