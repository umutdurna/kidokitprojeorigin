import { useState } from "react";
import './components/forgot.css';
import './popup.js';
import PopUp from './popup.js';


const ForgotPassword = () => {

    // State Kullanımları with popup //
    const [success, setSuccess] = useState(true);
    const [buttonState, setButtonState] = useState(true);
    const [popState, setPopUpState] = useState(false);
    const [popValue, setPopUpValue] = useState("");
    const [popMessage, setPopUpMessage] = useState("");
    const [popButtonValue, setPopUpButtonValue] = useState("");

    const [values, setValues] = useState({
        username: ""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: " E-Posta",
            label: "E-Mail",
            topmessage: "Şifrenizi sıfırlamak için daha önce Kidokit’e üye olduğunuz e-posta adresinizi yazınız",
            errormessage: "lütfen geçerli bir adres girin",
            required: true
        },
    ]

    const noRefreshSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        if(values.email.includes("@")) {
            setButtonState(false);
        }
        else{
            setButtonState(true);
        }
    }

    const handleSuccesT = () => {
        setSuccess(true)
    }

    const handleSuccessF = () => {
        setSuccess(false)
    }

    const girisIstekleri = async () => {
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const apiForget = await fetch('https://testapi.kidokit.com/api/account/forgetPassword', req);
        if (apiForget.status === 200) {
            setPopUpState(true);
            console.log("go");
            setPopUpMessage("E postanızı kontrol edin");
            setPopUpValue("Şifrenizi sıfırlamak için gerekli bağlantı " + values.email + " mailinize gönderildi.");
            setPopUpButtonValue("E Posta Uygulamasını Aç")
            return true
        }
        else {
            handleSuccessF();
            setPopUpState(true);
            setPopUpMessage("Hata");
            setPopUpValue("E Posta adresinize şifre sıfırlama maili gönderilemedi");
            setPopUpButtonValue("Tekrar E-Posta Gönder")
            return true
        }
    }

    return ( 
       <div className="forgotPassword-form">
            <h1 className="header">Şifre Sıfırlama</h1>
            <div className="form">
                <form onSubmit={noRefreshSubmit} >
                    <div className="inputs">
                    <p className='top-message'>{inputs[0].topmessage}</p>
                    <div className="emailss">
                    <input key={inputs[0]} {...inputs[0]}
                            value={values[inputs[0].name]}
                            onChange={onChange} />
                    </div>
                    </div>
                    <br />
                    <div className="submit">
                        <input className="submitWidth" style={{ backgroundColor: buttonState === true ? "#c6bfdc" : "" }} type="submit" value="E-Posta Gönder" disabled={buttonState} onClick={async () => {
                            handleSuccesT();
                            values.email && await girisIstekleri()
                        }} focused={success.toString()} />
                    </div>
                </form>
            </div>
            {popState && <PopUp message={popMessage} value={popValue} buttonValue={popButtonValue} />}
       </div>
     );
}
 
export default ForgotPassword;