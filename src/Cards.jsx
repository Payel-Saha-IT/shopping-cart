import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { IconButton } from '@material-ui/core';
import { AddShoppingCartSharp } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {

  //passing the unique id of a product to 'Products.jsx'
  const SelectItem=()=>{
    props.addtoCart(props.unqID);
  }

  //Each product card design
  return (
    <>  
    
    <div className='card-item'>
    
            <div className='card-image'>
            <NavLink to={`/product/${props.unqID}`}>
              <img src={props.imgsrc}/>
            </NavLink>   
            </div>
           
            <div className='card-title'>
              <h4>{props.title}</h4>
            </div>
           

            <div className='card-rate-price'>
                <h5>Price:${props.price}</h5>
                <h5>Rating:{props.rate}</h5>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={SelectItem}>
            <AddShoppingCartSharp />
          </IconButton>
            </div>
          </div>     
    
          
      
    </>
  )
}

export default Cards;