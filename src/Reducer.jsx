const reducer = (state,action) => {
   
  switch(action.type)
  {

    case "SET_Loading":
      return{
        ...state,
        isLoading:true
      }
    
    case "Show_Home_Page":
        return {
          ...state,
          isLoading:false,
          products:action.payload,
          all_products:action.payload
        };
        
    //set category type,upon selecting category type from select box    
    case "SET_CATEGORY":
       return {
        ...state,
        category_type:action.payload,
       }    
       
        //set rating type,upon selecting rating type from select box 
       case "SET_RATING":
        return {
         ...state,
         rating_type:action.payload,
        }     
       

        // Filter based on both category and rating if they are selected
        //IMPORTANT-->keep all products in an seperate array from "products[]" here "all_products[]"
            //because if your product array got changed,then next time when you filter,you make filter with the current filterd items
            //not with all actual product items,which is a problem

        case "SET_FILTERED_ITEMS":
          
          let filteredProducts;

           // Both category and rating are selected
          if ((state.category_type!=="" && state.category_type!=="all") && (state.rating_type!=="" && state.rating_type!=="all")) {
           
            filteredProducts = state.all_products.filter((val) => {
              return val.category === state.category_type && parseInt(val.rating.rate) === parseInt(state.rating_type);
            });
          } 
          

          // Only category is selected
          else if (state.category_type!=="" && state.category_type!=="all") {
            
            filteredProducts = state.all_products.filter((val) => {
              return val.category === state.category_type;
            });
          } 
          
          // Only rating is selected
          else if (state.rating_type!=="" && state.rating_type!=="all") {
            
            filteredProducts = state.all_products.filter((val) => {
              return parseInt(val.rating.rate) === parseInt(state.rating_type);
            });
          } 
          
          // Neither category nor rating is selected, return all products
          else {
            
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


      //add items to cart
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
          
        //delete items from the cart    
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