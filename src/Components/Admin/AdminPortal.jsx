import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import NavBar from '../NavBar'
import ViewMore from '../Pages/ViewMore'
import AddProducts from './AddProducts'
import AddUsers from './AddUsers'
import ViewUsers from './ViewUsers'
import EditProduct from './EditProduct'
import Footer from '../Footer'
import PageNotFound from '../PageNotFound'

const AdminPortal = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
        <Route element={<AddProducts/> }path='/addproducts'/>
        <Route element={<EditProduct/>} path='/editproduct/:id'/>
        <Route element={<AddUsers/>} path='/addusers'/>
        <Route element={<ViewUsers />} path='/viewusers'/>
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
    <Footer/>
    </>
  )
}

export default AdminPortal
