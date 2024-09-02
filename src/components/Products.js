import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

const Products = () => {

  const products=[{image:"imageurl",id:"12345",productname:"Cummins pump"}]
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
          {
            products.map((ele)=><Link to={`/products/${ele.id}`}><Product key={ele.id}/></Link>)
          }
          </div>
          </div>
          
    </div>
  )
}

export default Products