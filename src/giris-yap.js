import './components/girisyap.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';





const GirisYap = () => {

    const navigate = useNavigate();
    // useState kullanımları 
    const [success, setSuccess] = useState(true);
    // her refresh ettiğinde boş gelmesini sağlar.
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const [focused, setFocused] = useState(false)

     // input içindeki diziler 
     // e mail ile password kısmı : 
     // daha sonrasında map ile çağırılacak(tutorial) : 

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: " E-Posta",
            label: "E-Mail",
            topmessage: "E posta adresinizi yazınız",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: " Şifre",
            label: "Password",
            topmessage: "Şifrenizi Giriniz",
            required: true
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const focusHandle = () => {
        setFocused(true);
    }

    const falseHandle = () => {
        setSuccess(false);
    }

    const trueHandle = () => {
        setSuccess(true);
    }

    const girisIstekleri = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('https://testapi.kidokit.com/api/account/login', requestOptions);
        const data = await response.json();
        if (data.idToken != null) {
            console.log("Giriş Başarılı!")
            return true
        }
        else {
            falseHandle();
            console.log(data.errorMessage)
            return false
        }
    }


    return (
     
        <div className='girisYap-form'>
            <h1 className='header'>Giriş Yap</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        {inputs.map((input) => (
                            <div>
                                <p>{input.topmessage}</p>
                                <input key={input.id} {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                    onBlur={focusHandle}
                                    focused={focused.toString()}
                                />
                                <br/>
                                <br/>
                            </div>
                        ))}
                    </div>
                    <br/>
                    <div className="links">
                        <a href="/forgot-password">Şifremi Unuttum</a>
                    </div>
                    <br/>
                    <div className="submit">
                        <input type="submit" value="Giriş Yap" onClick={async () => {
                            trueHandle();
                            values.password && values.username && await girisIstekleri() && navigate('/girisYapildi')
                        }} focused={success.toString()} />
                        <span>Yanlış Bilgi!</span>
                    </div>
                </form>
            </div>
        </div>
     
    );
}
    

export default GirisYap;