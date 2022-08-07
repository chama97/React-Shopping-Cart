import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home"
import Login from "../pages/login"
import DashBoard from "../pages/dashboard"
import Sign from "../pages/sign"
import Cart from "../pages/cart"
import User from "../pages/user"
import Product from "../pages/product"


function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='dash' element={<DashBoard/>}/>
        <Route path='sign' element={<Sign/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='user' element={<User/>}/> 
        <Route path='product' element={<Product/>}/> 
    </Routes>
  );
}

export default App;
