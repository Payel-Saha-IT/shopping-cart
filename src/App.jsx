import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Cart from './Cart';
import {Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default App;