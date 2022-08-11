import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from './landingpage';
import KayıtOl from './kayitol';
import GirisYap from './giris-yap';




const App=() => {
  return (

    <Router>
          <div>
            <Routes>
              <Route path="/" element={<Landingpage/>} />
              <Route path="/kayitol" element={<KayıtOl/>} />
              <Route path='/girisyap' element={<GirisYap />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;
