import './App.css';
import Header from './components/header';
import './App.js';
import './components/landingpage.css';

import {useNavigate} from 'react-router-dom';



const Landingpage = ()=> {
    const navigate = useNavigate();
    return (
       <section className='arkaplan'>
      <div className="App">
        <Header/>
        <div className='hosGeldiniz'>
          <h2 className="hosGeldinizH2">Hoş geldiniz!</h2>
        </div>
        <div className='paragraf'>
          <p>Çocuğunuzu büyütürken artık yalnız değilsiniz!</p>
        </div>
        <div id='background'></div>
        <div class="buttonTop">
          <button class='button' onClick={() =>{
            navigate('/kayitol')
                }}> Kayıt Ol</button>
        </div>
        <div className="footer">
          <p className='footer-text-one'>Zaten bir hesabınız var mı? <a href="/girisyap">Giriş Yap</a></p>
        </div>
      </div>
      </section>
    );
  }
  
  export default Landingpage;