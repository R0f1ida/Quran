import { Routes, Route } from "react-router-dom";
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