import React from 'react'
import logo from '../images/musicicon.svg'
import './highlight.css'

function Highlight() {
    return (
        <div className='section'>
            <div className='logo'>
           <img src={logo}></img>
           </div>
           <div className='list'>
           <h3 className='plan'>Annual Plan</h3>
           <div className='group'>
           <p id='length'>$ 59.99/year  <u id='change'>Change</u></p>
           </div>
           </div>
           
        </div>
    )
}

export default Highlight
