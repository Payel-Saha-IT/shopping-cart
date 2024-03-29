import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Cart from './Cart';
import {Navigate, Route,Routes} from 'react-router-dom';
import ProductDetail from './ProductDetail';
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Products/>}></Route>
      
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/product/:id' element={<ProductDetail/>}></Route>
      <Route path='*' element={<Navigate to="/"/>}></Route>
    </Routes>
    </>
  )
}

export default App;