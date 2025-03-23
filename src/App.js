import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
