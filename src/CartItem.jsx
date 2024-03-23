import React from 'react'
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import {IconButton} from '@material-ui/core';
const CartItem = (props) => {

    const SelectItem=()=>{
            props.deleteItem(props.unqID);
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
                <h5>Price:{props.price}₹</h5>
                <h5>Rating:{props.rate}</h5>
            </div>

            <IconButton color="primary" onClick={SelectItem}>
                <RemoveShoppingCartOutlinedIcon />
                </IconButton>
          </div>
   </>
  )
}

export default CartItem;