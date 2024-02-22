import React from 'react'
import { useGlobalContext } from './AppProvider'
import CartItem from './CartItem';
const Cart = () => {
    const {cart_all_product,cart_item_count,deleteCartItem}=useGlobalContext();

    const DeleteFromCart=(id)=>{
            deleteCartItem(id);
    }
    let totalPrice=0;
    cart_all_product.map((val)=>{
        totalPrice=totalPrice+val.price;
    })

    if(cart_all_product.length>0)  
  return (
    <div>
        <>
        <div className='cart-items-price'>
        <div className='total-items'><h3>Total Items:{cart_item_count}</h3></div>
        <div className='total-price'><h3>Total Cart Price:{totalPrice}</h3></div>
        </div>
        
        <div className='cart-container'>
        {cart_all_product.map((val,index)=>{
            
                return (
                   <>
                        <CartItem key={val.id} imgsrc={val.image} title={val.title} description={val.description} price={val.price} rate={val.rating.rate}  deleteItem={DeleteFromCart} unqID={val.id}></CartItem>
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
    <h2>Your Cart is Empty</h2>
    </div>
    
    </div>
  
    </>
    
    )
}

export default Cart;