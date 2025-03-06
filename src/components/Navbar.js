import logo from '../img/hafiz-logo-02-02.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import { Quran } from '../pages/Quran';
import { Translate } from '../pages/Translate';
import { Memo } from '../pages/Memo';
import '../App.css';
import { Header } from './Header';
export function Navbar(){
    return (
      <>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/memorise" element={<Memo />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/translate" element={<Translate />} />
          </Routes>
        </div>


      </>

      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Homepage />}>
      //       <Route index element={<Homepage />} />
      //       <Route path="blogs" element={<Memorise />} />
      //       <Route path="contact" element={<Contact />} />
      //       <Route path="*" element={<NoPage />} />
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
        
    );
}