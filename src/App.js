import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from './landingpage';
import KayıtOl from './kayitol';
import GirisYap from './giris-yap';
import ForgotPassword from './forgot-password';
import PopUp from './popup';
import SifreYenile from './sifre-yenile';




const App=() => {
  return (

    <Router>
          <div>
            <Routes>
              <Route path="/" element={<Landingpage/>} />
              <Route path="/kayitol" element={<KayıtOl/>} />
              <Route path='/girisyap' element={<GirisYap />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/popup' element={<PopUp />} />
              <Route path='/sifre-yenile' element={<SifreYenile />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;
