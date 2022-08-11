



const GirisYap = () => {

    

//   // useState kullanımları : 
//   const [success, setSuccess] = useState(true);

//   // her refresh ettiğinde boş gelmesini sağlar.
//   const [values, setValues] = useState({
//     username: "",
//     password: ""
//   });

//   const [focused, setFocused] = useState(false)

//   // input içindeki diziler 
//   // e mail ile password kısmı : 
//   // daha sonrasında map ile çağırılacak(tutorial) : 

//   const inputs = [
//     {
//     id: 1,
//     name: "username",
//     type: "text",
//     placeholder: "e-Posta",
//     label: "E-Mail",
//     topmessage: "E Posta adresini yazınız",
//     required: true // zorunlu alan
//   },
//   {
//     id: 2,
//     name: "password",
//     type: "password",
//     placeholder: "Şifre",
//     label: "Password",
//     topmessage: "Şifrenizi Giriniz",
//     required: true
//   },
// ]

// const handleSubmit = (e) => {
//   e.preventDefault();
// }

// const onChange = (e) => {
//   setSuccess({...values, [e.target.name]: e.target.value})
// }

// const handleFocus = () => {
//   setFocused(true);
// }

// const handleSuccesFalse = () => {
//   setSuccess(false);
// }

// const handleSuccesTrue = () => {
//   setSuccess(true);
// }

// const signInRequest = async () => {
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(values)
//   };
//   const response = await fetch('https://testapi.kidokit.com/api/account/login', requestOptions);
//   const data = await response.json();
//   if (data.idToken != null) {
//       console.log("Giriş başarılı")
//       return true
//   }
//   else {
//       handleSuccesFalse();
//       console.log(data.errorMessage)
//       return false
//   }
// }



    return (
     
        <div>
            <p>Giris Yap Formu 
                E-Mail and Password Eklenecek.
            </p>
        </div>
     
    );
}
    

export default GirisYap;