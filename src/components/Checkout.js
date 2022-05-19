import React from 'react'
import '../styles/Checkout.css';

function Checkout() {
  return (
      <div>
        <div id="home">
            <div id="col">
                <div id="row">
                    <div id="box"></div>
                    <div id="box"></div>
                    <div id="box"></div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <h2 style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>Subtotal:</h2>
            <button className='payBtn'>Pay</button>
        </div>
      </div>
  )
}

export default Checkout