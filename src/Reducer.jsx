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
        
    case "GET_ALL_CATEGORY":
      return{
        ...state,
        category_list:action.payload
      }    
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

          const existingIndex=state.cart_all_product.findIndex((val)=>{
            return val.id===cartItem[0].id;
          })
          
          console.log(`existingIndex${existingIndex}`);
       
         
          if(existingIndex===-1)
          {
            cartItem[0].quantity=1;
            const updatedCartAllProduct = [...state.cart_all_product, ...cartItem]; // Add the new cartItem to the existing cart_all_product
          return {
            ...state,
            cart_item_count:state.cart_item_count+1,
            cart_all_product: updatedCartAllProduct, // Update cart_all_product with the updated array
          };
          }
         
          else if (existingIndex !== -1) {
            const updatedCartAllProduct = state.cart_all_product.map((item, index) => 
            {
                if (index === existingIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return {
                ...state,
                cart_item_count: state.cart_item_count + 1,
                cart_all_product: updatedCartAllProduct,
            };
        }
        
          
        //delete items from the cart    
         case "DELETE_CART_ITEM":
          const deletedItem=state.cart_all_product.filter((val)=>{
            return val.id===action.payload;
          })

          const newcartItemCount=state.cart_item_count-deletedItem[0].quantity;

        const remainingItem = state.cart_all_product.filter((val) => {
          return action.payload !== val.id;
        });
        const cartAllProductAfterDelete = [...remainingItem]; 
        return {
          ...state,
          cart_item_count:newcartItemCount,
          cart_all_product: cartAllProductAfterDelete, // Update cart_all_product with the updated array
        };

        case "Increase_Item_Count":
          console.log(`Payload:${action.payload}`);
            const TargetItem=state.cart_all_product.filter((val)=>{
                return val.id===action.payload;
            })

            const indexOfTheItem=state.cart_all_product.findIndex((val)=>{
              return val.id===TargetItem[0].id;
            })

            const updatedCart=state.cart_all_product.map((item,index)=>{
              if(indexOfTheItem===index)
              {
                return {...item,quantity:item.quantity+1};
              }
              return item;
            })  

            return{
              ...state,
              cart_all_product:updatedCart,
              cart_item_count:state.cart_item_count+1
            }


            case "Decrease_Item_Count":
          console.log(`Payload:${action.payload}`);
            const TargetItemforDecrease=state.cart_all_product.filter((val)=>{
                return val.id===action.payload;
            })

            const indexOfTheDecreasedItem=state.cart_all_product.findIndex((val)=>{
              return val.id===TargetItemforDecrease[0].id;
            })

            let updatedNewCart=state.cart_all_product.map((item,index)=>{
              if(indexOfTheDecreasedItem===index)
              {
                return {...item,quantity:item.quantity-1};
              }
              return item;
            })  

            return{
              ...state,
              cart_all_product:updatedNewCart,
              
              cart_item_count:state.cart_item_count-1
            }


       case "SET_HAMBURGER_STATUS":
        let updated_hamburger_status=false;
        if(state.hamburger_status)
        {
          updated_hamburger_status=false;
        }
         
        else{
          updated_hamburger_status=true;
        }
        console.log(state.hamburger_status);
          return{
            ...state,
            hamburger_status:updated_hamburger_status
          }
      default:
    return state;
  }

  

}

export default reducer;