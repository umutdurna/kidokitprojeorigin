import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from './landingpage';



const App=() => {
  return (

    <Router>
   <div>
   <Routes>

   <Route path="/" elements={<Landingpage/>} />

  </Routes>
    </div>

    </Router>
  );
}

export default App;
