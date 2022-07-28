import React from 'react'
import resim1 from '../img/beyazlogo.png';
import './header.css'



function Header(){
    return(
        <div>
           <img src={resim1} alt="" className='beyazlogo' />
        </div>
    )
}

export default Header