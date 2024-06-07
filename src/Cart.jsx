import React from 'react'
import { useGlobalContext } from './AppProvider'
import CartItem from './CartItem';
const Cart = () => {
    const {cart_all_product,cart_item_count}=useGlobalContext();

    
    let totalPrice=0;
    cart_all_product.map((val)=>{
        return totalPrice=totalPrice+(val.quantity*val.price);
        
    })

    if(cart_all_product.length>0)  
  return (
    <div>
        <>
        <div className='cart-items-price'>
        <div className='total-items'><p>Total Items: {cart_item_count}</p></div>
        <div className='total-price'><p>Total Cart Price: ${(Math.round(totalPrice * 100) / 100).toFixed(2)}</p></div>
        </div>
        
        <div className='cart-container'>
        {cart_all_product.map((val,index)=>{
            
                return (
                   <>
                        <CartItem key={val.id} imgsrc={val.image} title={val.title} description={val.description} price={val.price} rate={val.rating.rate} quantity={val.quantity} unqID={val.id}></CartItem>
                        </>
                )
            })
        }

        
        
        </div>

        
    </>
    </div>
  )

  return (
    <>
    <div className='cart-container'>
    <div className='not-found'>
    <h2>Your Cart is Empty!!</h2>
    </div>
    
    </div>
  
    </>
    
    )
}

export default Cart;