import { Routes, Route } from "react-router-dom";
import { Quran } from '../pages/Quran';
import { Translate } from '../pages/Translate';
import { Memo } from '../pages/Memo';
import '../App.css';
import { Header } from './Header';
import { Homepage } from "../pages/Homepage";
export function Navbar(){
    return (
      <>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/memorise" element={<Memo />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/translate" element={<Translate />} />
          </Routes>
        </div>


      </>
        
    );
}