import React from 'react'
import './App.css'
import './assets/Style/apnamart.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import UsersPortal from './Components/Users/UsersPortal'
import PageNotFound from './Components/PageNotFound'

const App = () => {
  return (
    <>
      <div className="apna-mart">
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<AdminPortal/>} path='/adminportal/*'/> 
          <Route element={<UsersPortal/>} path='/userportal/*'/>
          <Route element={<PageNotFound/>} path='*'/>
        </Routes>
      </div>
    </>
  )
}

export default App
