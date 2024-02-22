import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from './AppProvider';

const Navbar = () => {

    const location=useLocation();
console.log(location);
  const {category_type,setCategory,setRating,setGoHome,rating_type,cart_item_count}=useGlobalContext();
  const InputEvent=(e)=>{
      setCategory(e.target.value);
  }

  const GoHome=()=>{
    setGoHome();
  }
  

  const RatingEvent=(e)=>{
    setRating(e.target.value);
    }

  return (
   
    <>
        <div className='navbar-container'>
            <div className='brand'>

            
            <NavLink to='/' onClick={GoHome}>Home</NavLink>
            </div>
            
           {(location.pathname==='/')?(

            <><div className='select-box'>

            <select onChange={InputEvent} value={category_type}>
              <option disabled value="">Choose a category</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>


          </div><div className='select-box'>

              <select onChange={RatingEvent} value={rating_type}>
                <option disabled value="">Choose Rating</option>
                <option value="4">4-5</option>
                <option value="3">3-4</option>
                <option value="2">2-3</option>
                <option value="1">1-2</option>
              </select>


            </div></>

           ):
           <div></div>
           }
           
            



            <div className='cart'>
            <div className='cart-item-count'>{cart_item_count}</div>
           <NavLink to='/cart'><div className='cart-icon'>🛒</div></NavLink> 
            
            </div>

        </div>
    </>
  )
}

export default Navbar;