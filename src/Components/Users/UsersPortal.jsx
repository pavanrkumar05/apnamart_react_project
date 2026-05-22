import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import ViewMore from '../Pages/ViewMore'
import NavBar from '../NavBar'
import CartItems from './CartItems'
import OrderPlaced from './OrderPlaced'
import Footer from '../Footer'
import PageNotFound from '../PageNotFound'

const UsersPortal = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
        <Route element={<CartItems/>} path='/cartitems'/>
        <Route element={<OrderPlaced/>} path='/orderplaced'/>
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
    <Footer/>  
    </>
  )
}

export default UsersPortal
