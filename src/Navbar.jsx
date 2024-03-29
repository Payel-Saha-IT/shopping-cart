import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from './AppProvider';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';
const Navbar = () => {

    const location=useLocation();
console.log(location);
  const {category_type,setCategory,setRating,setGoHome,rating_type,cart_item_count,mobileMenuOpen,hamburger_status,category_list}=useGlobalContext();


  const InputEvent=(e)=>{
      setCategory(e.target.value);
  }

  const GoHome=()=>{
    setGoHome();
  }
  

  const RatingEvent=(e)=>{
    setRating(e.target.value);
    }

  const isOpen=()=>{
    mobileMenuOpen();
  }

  return (
   
    <>
    {/* mobile-navbar class is needed for positioning home,cart everything in vertical form*/}
        <div className={hamburger_status?"mobile-navbar":'navbar-container'}>
            <div className='brand'>

            
            <NavLink to='/' onClick={GoHome}>Home</NavLink>
            </div>
            
           {(location.pathname==='/')?(

            <>
            <div className={hamburger_status?" mobile-menu":"desktop-menu"}>
              <div className='menu-div'>

                  <select onChange={InputEvent} value={category_type}>
                    <option disabled value="">Choose a category</option>
                    <option value="all">All</option>
                    {
                      category_list.map((cat)=>{
                       return <option value={`${cat}`}>{`${cat}`}</option>
                      })    
                    }  
                  </select>


              </div>
          
             <div className='menu-div'>

                  <select onChange={RatingEvent} value={rating_type}>
                    <option disabled value="">Choose Rating</option>
                    <option value="all">All</option>
                    <option value="4">4-5</option>
                    <option value="3">3-4</option>
                    <option value="2">2-3</option>
                    <option value="1">1-2</option>
                  </select>


              </div> 

            </div> 
            </>

           ):
           <div></div>
           }
           
            



            <div className='cart'>
            <div className='cart-item-count'>{cart_item_count}</div>
           <NavLink to='/cart'><div className='cart-icon'>🛒</div></NavLink> 
            
            </div>

            {/* hamburger-icon-close is needed for positioning the closed hamburger icon in top left*/}
        <div className={hamburger_status?" hamburger-icon-close":'hamburger-icon'} onClick={isOpen}>
          { (hamburger_status)?<CancelPresentationSharpIcon/>:<MenuSharpIcon/>}
           </div>
           
           

        </div>

        
    </>
  )
}

export default Navbar;