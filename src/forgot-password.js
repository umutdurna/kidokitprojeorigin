import { useState } from "react";
import './components/forgot.css';



const ForgotPassword = () => {

    // State Kullanımları with popup //
    const [success, setSuccess] = useState(true);
    const [] = useState();
    const [] = useState();

    const [values, setValues] = useState({
        username: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: " E-posta Adresiniz",
            label: "E-Mail",
            topmessage: "Şifrenizi sıfırlamak için daha önce Kidokit’e üye olduğunuz e-posta adresinizi yazınız",
            errormessage: "Geçerli bir e-posta adresi giriniz.",
            required: true
        },
    ]


    const noRefreshSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
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
        const apiForgot = await fetch('https://testapi.kidokit.com/api/account/forgetPassword', req);
        if(apiForgot.ok)
        {
            console.log("Giriş Başarılı!");
        }
        else{
            console.log("giriş yapılamadı");
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
                        <input type="submit" value="E-posta Gönder" onClick={async () => {
                            handleSuccesT();
                            values.username && await girisIstekleri()
                        }} focused={success.toString()}  /> 
                    </div>
                </form>
            </div>
       </div>
     );
}
 
export default ForgotPassword;