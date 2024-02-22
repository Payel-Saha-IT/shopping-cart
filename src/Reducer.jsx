const reducer = (state,action) => {
   
  switch(action.type)
  {
    
    case "Show_Home_Page":
        return {
          ...state,
          products:action.payload,
          all_products:action.payload
        };
        
    case "SET_CATEGORY":
       return {
        ...state,
        category_type:action.payload,
       }    
       

       case "SET_RATING":
        return {
         ...state,
         rating_type:action.payload,
        }     
       
        case "SET_FILTERED_ITEMS":
          // Filter based on both category and rating if they are selected
          let filteredProducts;
          if (state.category_type!=="" && state.rating_type!=="") {
            // Both category and rating are selected
            filteredProducts = state.all_products.filter((val) => {
              return val.category === state.category_type && parseInt(val.rating.rate) === parseInt(state.rating_type);
            });
          } else if (state.category_type!=="") {
            // Only category is selected
            filteredProducts = state.all_products.filter((val) => {
              return val.category === state.category_type;
            });
          } else if (state.rating_type!=="") {
            // Only rating is selected
            filteredProducts = state.all_products.filter((val) => {
              return parseInt(val.rating.rate) === parseInt(state.rating_type);
            });
          } else {
            // Neither category nor rating is selected, return all products
            filteredProducts = state.all_products;
          }
        
          return {
            ...state,
            filtered_products: filteredProducts,
            products: filteredProducts
          };
        

    //when we click Home it should be set as initial state  
    case "Refresh_To_Initial":
      return{
        ...state,
        products:[],
        category_type:"",
        filtered_products:[],
        all_products:[],
        rating_type:"",
      }


        case "SET_CART_ITEM":
            const cartItem = state.all_products.filter((val) => {
              return action.payload === val.id;
            });
            const updatedCartAllProduct = [...state.cart_all_product, ...cartItem]; // Add the new cartItem to the existing cart_all_product
            return {
              ...state,
              cart_item_count:state.cart_item_count+1,
              cart_all_product: updatedCartAllProduct, // Update cart_all_product with the updated array
            };
            
         case "DELETE_CART_ITEM":
          const remainingItem = state.cart_all_product.filter((val) => {
            return action.payload !== val.id;
          });
          const cartAllProductAfterDelete = [...remainingItem]; // Add the new cartItem to the existing cart_all_product
          return {
            ...state,
            cart_item_count:state.cart_item_count-1,
            cart_all_product: cartAllProductAfterDelete, // Update cart_all_product with the updated array
          };
     
      default:
    return state;
  }

  

}

export default reducer;