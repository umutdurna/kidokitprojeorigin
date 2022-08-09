import React, { Component } from 'react'




class Form extends Component {
  render() {
    return (

     <div className="card-body">
      <div>
        <h1>Kayıt Olun</h1>
      </div>
        <form action="GET">
            <label htmlFor="name">Ad ve Soyadınız</label>
            <br/>
            <input type="text" id='adSoyad' />
            <br/>
            <label htmlFor="sifre">Bir şifre belirleyiniz</label>
            <br/>
            <label htmlFor="Çocuğun ismi?"></label>
            <br />
            <br/>
            <input type="text" id='ismi' />
            <br/>
            <label htmlFor="Çocuğunuzun Cinsiyet?">Çocuğunuzun Cinsiyeti</label>
            <br />
            <br/>
            <label htmlFor="erkek">Erkek</label>
            <input type="radio" />
            <label htmlFor="kadın">Kadın</label>
            <input type="radio" />
            <br/>
            <br/>
            <label htmlFor="Çocuğun İsmi?">Çocuğun İsmi?</label>
            <br />
            <br />
            <input type='text' id='cocugunismi' />

        </form>
     </div>

    )
  }
}

export default Form