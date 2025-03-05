import './App.css';
import { Navbar } from './components/Navbar';
import { Memo } from './pages/Memo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
