import './components/sifre-yenile.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const SifreYenile = () => {

    const navigate = useNavigate();

// her refresh atıldığında boş gelmesi için setValues:

const [values, setValues] = useState({
    password: "",
    activationLink: ""
});


// useState kullanımları : (Submitte disabled olması için): 





const [isButtonActive, setIsButtonActive] = useState(true);



// inputların özellikleri : 

const inputs = [
    {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Şifre",
          label: "password",
          errormessage: "Parola en az 8 karakter en az bir harf ve en az bir sayı içermeli",
          topmessage: "Lütfen yeni şifrenizi belirleyiniz",
          pattern: `^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+){8,20}$`,
          required: true
    },
    {
        id: 2,
        name: "passwordtekrar",
        type: "password",
        placeholder: "Şifre Tekrar",
        label: "password",
        errormessage: "Şifreleriniz Aynı Olmalı!",
        topmessage: "Lütfen yeni şifrenizi doğrulayınız",
        pattern: values.password,
        required: true
    },
    {
        id: 3,
        name: "activationLink",
        type: "text",
        placeholder: "Link",
        label: "Link",
        topmessage: "Activation Link",
        required: true
    }
]

const [focused, setFocused] = useState(false)

// Buton Aktif olup olmama ayarlama onChange kısmı : (password aynı olması için)
const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    if (values.password === values.passwordtekrar) {
        setIsButtonActive(false);
    }
    else {
        setIsButtonActive(true);
    }
}

const focusHandle = () => {
    setFocused(true);
}

const girisIstekleris = async () => {
    const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    const apiRefresh = await fetch('https://testapi.kidokit.com/api/account/activateForgetPassword', req)
    if(apiRefresh.status === 200){
        console.log("okey");
        navigate('/girisyap');
    }
    else{
        console.log("no");
    }
}


    return ( 
        <div className="sifre-yenile">
            <h1 className="header"> Yeni Bir Şifre Belirleyiniz</h1>
            <div className="form">
                <form>
                    <div className="sifre-yenile">
                        <div className="password">
                        <p>{inputs[0].topmessage}</p>
                        <input className="new-password" key={inputs[0]} {...inputs[0]}
                               value={values[inputs[0].name]}
                               onChange={onChange}
                               onBlur={focusHandle}
                               focused={focused.toString()} />
                            <span>{inputs[0].errormessage}</span>
                        </div>
                        <div className="password-two">
                            <p>{inputs[1].topmessage}</p>
                            <input className="new-password" key={inputs[1]} {...inputs[1]}
                                onChange={onChange}
                                onBlur={focusHandle}
                                focused={focused.toString()} />
                            <span>{inputs[1].errormessage}</span>
                        </div>
                        <div className="activation">
                            <p>Activation Link</p>
                            <input className="new-password" key={inputs[2]} {...inputs[2]}
                                onChange={onChange} />
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" disabled={isButtonActive} className="new-password-submit" value="Kayıt Ol"
                            onClick={async () => { await delete values.passwordagain; girisIstekleris() && navigate('/girisyap') }} />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SifreYenile;