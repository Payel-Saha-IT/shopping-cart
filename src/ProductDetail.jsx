import React from 'react'
import {useGlobalContext} from './AppProvider';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const {products}=useGlobalContext();
    console.log(products);
    const {id}=useParams();

    //because useParams returns string
    const productId = parseInt(id);
    
    const productItem=products.filter((val)=>{return productId===val.id})
    console.log(productItem[0].title);
  return (
    <>
    <div className='card-container'>
    <div className='card-item'>
    
    <div className='card-image'>
    
    <img src={productItem[0].image}/>
     
    </div>
    <div className='category'>
        <h3>Category:{productItem[0].category}</h3>
    </div>
    <div className='card-title'>
    <h4>{productItem[0].title}</h4>
    </div>
    <div className='card-description'>
    <p>{productItem[0].description}</p>
    </div>

    <div className='card-rate-price'>
        <h5>Price:{productItem[0].price}₹</h5>
        <h5>Rating:{productItem[0].rating.rate}</h5>
        
    </div>
</div>    





    </div>
         

            

    </>
  )
}

export default ProductDetail;