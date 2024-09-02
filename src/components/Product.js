import React from 'react'
import image from '../images/Tractor-Oil-Pump.webp'
const Product = () => {
  return (
    <div className='product-container'>
            <img className='product-logo' src={image}/>
            <div className='productinfo-container'>
                <h4>Cummins Oil Pump</h4>
                
            </div>
    </div>
  )
}

export default Product