import './App.css';
import Commetn from './Components/Commetn';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Game from './Components/Game';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Man from './Components/Man';
import System from './Components/System';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Game/>
      <Man/>
      <System/>
      <Commetn/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
