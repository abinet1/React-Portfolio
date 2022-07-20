import { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap/gsap-core";

import "./Hero.css";
import profile_pic from "../../images/ppss.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero=()=>{

  let hero = useRef(null);
  useEffect(()=>{
    TweenMax.to(
      hero,
      .8,
      {
        opacity:1,
        y: -20, 
        ease: Power3.easeInOut

      }
    )
  })
  
  return (
    <section className="hero" rel={el=>{hero = el}} >
      <Container className="hero-container">

        <img className="hero-image" src={profile_pic} />
        <hr />
        <h1>Hello</h1>
        <h3>I'm <span className="hero-name">Abinet</span></h3>
        <h3>Web <span className="hero-occopation">Developer</span></h3>
        <span className="hero-button"><Button primery >Contact Me</Button></span>
      </Container>
    </section>
  )
}

export default Hero;
