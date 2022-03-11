import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import ContainerDoi from './components/ContainerDoi/ContainerDoi';

function App() {
  return (
    <div>
      <Navbar/>
      <Container/>
      <ContainerDoi/>
      <Footer/>
    </div>
  );
}

export default App;
