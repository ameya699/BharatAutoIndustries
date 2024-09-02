import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <div className='fadeInUp-animation'>
          <div className='productscontainer'>
          <div className='products-heading'>Our Products</div>
          <div className='products-catalogue'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </div>
          </div>
    </div>
  )
}

export default Products