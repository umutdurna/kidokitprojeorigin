import { useState } from "react";
import './components/forgot.css';




const ForgotPassword = () => {

    // State Kullanımları with popup //
    const [success, setSuccess] = useState(true);
    const [buttonState, setButtonState] = useState(true);
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
        if (values.email.includes("@")) {
            setButtonState(false);
        }
        else {
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
            console.log("go");
        }
        else {
            handleSuccessF();
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
                        <input style={{ backgroundColor: buttonState === true ? "LightGray" : "" }} type="submit" value="E-Posta Gönder" disabled={buttonState} onClick={async () => {
                            handleSuccesT();
                            values.email && await girisIstekleri()
                        }} focused={success.toString()} />
                    </div>
                </form>
            </div>
       </div>
     );
}
 
export default ForgotPassword;