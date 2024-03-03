import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from './Reducer';

//creating a context API
const AppContext=createContext();

const AppProvider = ({children}) => {

    //initial state of useReducer Hook
    const initialState={
        products:[],
        category_type:"",
        filtered_products:[],
        all_products:[],
        rating_type:"",
        cart_all_product:[],
        cart_item_count:0
    
    }

    //iseReducer Hook
    const [state,dispatch]=useReducer(reducer,initialState);


    //set category on selecting from the selectbox
    const setCategory=(category)=>{
        dispatch({
                type:"SET_CATEGORY",
                payload:category,
                
        })
        
    }


     //set rating on selecting from the selectbox
    const setRating=(rating)=>{
        dispatch({
                type:"SET_RATING",
                payload:rating
                
        })
        
    }

    //set Cart Item
    const setCartItem=(id)=>{
        dispatch({
            type:"SET_CART_ITEM",
            payload:id
        })
    }


console.log(state.cart_products);

    //delete Cart Item
    const deleteCartItem=(id)=>{
        dispatch({type:"DELETE_CART_ITEM",payload:id})
    }
    
    //function that called when the page is loading for the first time or when Home is clicked
    const loadProductsAndShowHomePage = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                dispatch({ type: "Show_Home_Page", payload: res.data });
            })
            .catch((error) => {
                console.log('Error loading products:', error.message);
                // Handle error appropriately
            });
    };

    //when home is clicked again then set all the state items to the initial state and again show all products
    const setGoHome=()=>{

      dispatch({type:"Refresh_To_Initial",payload:state.initialState})
    
    loadProductsAndShowHomePage();
    }

console.log(state.category);



//when page is loading first,it shows all the products
   useEffect(()=>{
    loadProductsAndShowHomePage();
   },[])



 //filtering based on rating and category
useEffect(()=>{
    console.log(state.rating_type); // Move the console.log here
    dispatch({type:"SET_FILTERED_ITEMS"})

},[state.rating_type,state.category_type])
   




console.log(state.products);
  return (
   <AppContext.Provider value={{...state,setCategory,setRating,setGoHome,setCartItem,deleteCartItem}}>{children}</AppContext.Provider>
  )
}

//custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export default AppProvider;
export {useGlobalContext,AppContext};