import './App.css';
import Banner from './components/Banner';
import Container from './components/Container';
import Foot from './components/Foot';
import Header from './components/Header';
import Part from './components/Part';
// import Footer from '/components/Footer.';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Container/> 
      <Part/>
      <Foot/>
      
     

    </div>
  );
}

export default App;
