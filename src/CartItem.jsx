import React from 'react'
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import {IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useGlobalContext } from './AppProvider';
const CartItem = (props) => {
  const {increaseCount,decreaseCount}=useGlobalContext();
    const SelectItem=()=>{
            props.deleteItem(props.unqID);
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
              <img src={props.imgsrc}/>
            </div>
            <div className='card-title'>
              <h4>{props.title}</h4>
            </div>

            <div className='card-rate-price'>
                <h5>Price: ${props.price*props.quantity}</h5>
                <h5>Rating: {props.rate}</h5>
                
            </div>
            
            <div className='cart-item-quantity'>
            <IconButton color="primary" onClick={incrementCount}>
                < AddCircleOutlineIcon/>
            </IconButton>
            <div className='quantity-title'><h3>Quantity: {props.quantity}</h3></div>

            {(props.quantity>1)?
              <IconButton color="primary" onClick={decrementCount}>
                < RemoveCircleOutlineIcon/>
            </IconButton>:
            <IconButton color="primary" onClick={decrementCount} disabled>
                < RemoveCircleOutlineIcon/>
            </IconButton>
            
            }
            
            </div>

                <IconButton color="primary" onClick={SelectItem}>
                  <RemoveShoppingCartOutlinedIcon />
                </IconButton>
          </div>
   </>
  )
}

export default CartItem;