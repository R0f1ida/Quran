import logo from '../hafiz-logo-02-02.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import { Quran } from '../pages/Quran';
import { Translate } from '../pages/Translate';
import { Memo } from '../pages/Memo';
import '../App.css';
export function Navbar(){
    return (
      <>
        <Layout />
        <div className='container'></div>
        <Routes>
          <Route path="/memorise" element={<Memo />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>

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