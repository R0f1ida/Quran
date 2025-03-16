import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

let mybutton = document.getElementById("topBtn");

function App() {
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App">
      <button onClick={topFunction} id="topBtn" title="Go to top">Top</button>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
