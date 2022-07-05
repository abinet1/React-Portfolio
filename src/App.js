import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <about></about>
      <skills></skills>
      <footer></footer>
    </div>
  );
}

export default App;
