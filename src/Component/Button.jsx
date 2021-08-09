import React from 'react'
import './button.css';

function Button() {
    return (
        <div className='buttons' >
        <div className='buttoner'>
        <button style={{backgroundColor:'blue' ,color:'white',paddingTop:'1%'}} type="button">Proceed to Payment</button> 
       </div>
       <div className='buttons'>
        <button style={{marginTop:'2%', marginLeft:'2%'}} type="button2">Cancel Order</button> 
        </div>
        </div>
    )
}

export default Button
