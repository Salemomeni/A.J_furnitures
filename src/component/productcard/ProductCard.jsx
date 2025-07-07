import React from 'react'
import './card.css'
import product1 from '../../assets/images/product-1.jpg'
import { Link } from 'react-router-dom'
const ProductCard = () => {
  return (
    <div className='mainCard'>
      <Link className='Link' to = '/detail' as ={Link}>
 <div className='productImg'>
            <img src={product1} alt="" />
        </div>
        <div className='text-center d-flex flex-column justify-content-center productText'>
            <h5>Nordic Chair</h5>
            <p>$50.00</p>
         {/* <h6 className=''>+</h6> */}

        </div>

    </Link>
           </div>
  )
}

export default ProductCard