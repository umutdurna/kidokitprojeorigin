import { useNavigate } from 'react-router-dom';
import hataliLogo from './img/error.png';
import onayLogo from './img/succes.png';
import './components/pop-up.css';


const PopUp = (props) => {

    //props component gibi o sayfanın özelliklerini kullanacağımız yer =>>>
    
    //message === "" < Forgot-passworddaki set ettiğimiz açıklama olmazsa özellik aktif hale gelmez ve kabul edilemez.

    const navigate = useNavigate();

    const message = props.message;

    const value = props.value;

    const buttonValue = props.buttonValue


    const sayfaYenile = () => {
        window.location.reload();
    }

    return ( 
        <div className="pop-up">
            <div className="icerik">
            {message === "Hata" && <img src={hataliLogo} alt="hata" />}
            {message === "E postanızı kontrol edin" && <img src={onayLogo} alt="onay" />}
            < h1 style={{ color: message === "Hata" ? "#EC4F4F" : "#3CD77A" }} > {message}</h1>
            <p>{value}</p>
            <div className="submit">
                    <input type="submit" value={buttonValue} onClick={message === "Hata" ? sayfaYenile : () => navigate('/sifre-yenile')} />
                </div>
            </div>
        </div>

     );
}
 
export default PopUp;