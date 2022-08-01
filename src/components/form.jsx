import React, { Component } from 'react'




class Form extends Component {
  render() {
    return (

     <div className="card-body">
        <form action="GET">
            <label htmlFor="name">Ad ve Soyadınız</label>
            <br/>
            <input type="text" id='adSoyad' />
            <br/>
            <label htmlFor="sifre">Bir şifre belirleyiniz</label>
            <br/>
            <label htmlFor="Çocuğun ismi?"></label>
            <br/>
            <input type="text" id='ismi' />
            <br/>
            <label htmlFor="Çocuğunuzun Cinsiyet?"></label>
            <br/>
            <label htmlFor="erkek">Erkek</label>
            <input type="radio" />
            <label htmlFor="kadın">Kadın</label>
            <input type="radio" />
            <br/>
            <br/>
            <label htmlFor="e-mail">E-posta adresinizi yazınız</label>
            <br/>
            <input type="e-mail" />
            <br/>
            <label htmlFor="sifreBelirle">Bir şifre belirleyiniz</label>
            <br/>
            <input type="passowrd" />
            <br/>
            <label htmlFor="dogumTarihi">Çocuğun Doğum Tarihi?</label>

        </form>
     </div>

    )
  }
}

export default Form