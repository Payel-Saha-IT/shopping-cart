import React from 'react';
import Cards from './Cards';
import {useGlobalContext} from './AppProvider';
import { spiral } from 'ldrs'

spiral.register()
const Products = () => {

  const {products,isLoading}=useGlobalContext();
  console.log(products);

  

if(isLoading)

 return <div className="load-class">
<l-spiral
size="80"
speed="0.9" 
color="#fc00b1" 
></l-spiral>
 </div>

//if poduct are found then shows the products    
if(products.length>0)
  return (
    <>
        <div className='card-container'>
        
        {products.map((val,index)=>{
            
                return (
                 //we have passed a props named unqID,though we had props key,because if we use 'key',console.log(id) in AddItem will show undefined
                        <Cards key={val.id} imgsrc={val.image} title={val.title} description={val.description} price={val.price} rate={val.rating.rate} unqID={val.id}></Cards>
                   
                )
            })
        }
        
        </div>
    </>
  )


  //if poduct are not found then shows the following
  return (
  <>
  <div className='card-container'>
  <div className='not-found'>
  <h2>No Products found</h2>
  </div>
  
  </div>

  </>
  
  )
}

export default Products;