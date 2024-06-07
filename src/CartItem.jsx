import React from 'react'
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import {IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useGlobalContext } from './AppProvider';
const CartItem = (props) => {
  const {increaseCount,decreaseCount,deleteCartItem}=useGlobalContext();
    const SelectItem=()=>{
      deleteCartItem(props.unqID);
    }

    const incrementCount=()=>{
      ;
      increaseCount(props.unqID);
    }

    const decrementCount=()=>{
      
      decreaseCount(props.unqID);
    }

  return (
   <>
     <div className='card-item'>
            <div className='card-image'>
              <img src={props.imgsrc} alt='cart-product'/>
            </div>
            <div className='card-title'>
              <h4>{props.title}</h4>
            </div>

            <div className='card-rate-price'>
                <h5>Price: ${(Math.round((props.price*props.quantity)*100)/100).toFixed(2)}</h5>
                <h5>Rating: {props.rate}</h5>
                
            </div>
            
            <div className='cart-item-quantity'>
            
            {(props.quantity>1)?
              <IconButton color="primary" onClick={decrementCount}>
                < RemoveCircleOutlineIcon/>
            </IconButton>:
            <IconButton color="primary" onClick={decrementCount} disabled>
                < RemoveCircleOutlineIcon/>
            </IconButton>
            
            }

            <div className='quantity-title'><h3>Quantity: {props.quantity}</h3></div>

            <IconButton color="primary" onClick={incrementCount}>
                < AddCircleOutlineIcon/>
            </IconButton>

            </div>

                <IconButton color="primary" onClick={SelectItem}>
                  <RemoveShoppingCartOutlinedIcon />
                </IconButton>
          </div>
   </>
  )
}

export default CartItem;