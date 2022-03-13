import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import ContainerDoi from './components/ContainerDoi/ContainerDoi';
import ContainerTrei from './components/ContainerTrei/ContainerTrei';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Container/>
      <ContainerDoi/>
      <ContainerTrei/>
      <Footer/>
    </div>
  );
}

export default App;
