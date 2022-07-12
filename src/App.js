import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Footer from"./components/Footer/Footer";
function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
