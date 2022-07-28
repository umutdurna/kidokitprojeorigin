import logo from './logo.svg';
import './App.css';
import Header from './components/header';




function App() {
  return (
    <div className="App">
    <Header/>
      <div class='hosGeldiniz'>
      <h2 class="hosGeldinizH2">Hoş geldiniz!</h2>
      </div>
        <div class='paragraf'>
          <p>Çocuğunuzu büyütürken artık yalnız değilsiniz! </p>
          </div>
        <div id='background'></div>
        <div class="buttonTop">
          <button class='button'>Kayıt Ol</button>
        </div>
      <div class="footer">
        <p class='zatenBir'>Zaten bir hesabınız var mı? <span class='girisYap'>Giriş Yap</span></p>
      </div>
    </div>
  );
}

export default App;
