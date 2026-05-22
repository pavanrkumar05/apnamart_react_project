import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {

    let location =useLocation()
    let pathBool=location.pathname.startsWith('/adminportal')
    // console.log(pathBool)
    
  return (
    <>
        <div className="navbar">
            <div className="logo"> </div>
            <div className="links">
                {
                    pathBool 
                    ? 
                    // admin navbar
                    <ul>
                        <li><NavLink to='/adminportal/'>Home</NavLink></li>
                        <li><NavLink to='/adminportal/products'>Products</NavLink></li>
                        <li><NavLink to='/adminportal/addusers'>Users</NavLink></li>
                        <li><NavLink to='/'>Logout</NavLink></li>
                    </ul>
                    :
                    // user navbar
                    <ul>
                        <li><NavLink to='/userportal/'>Home</NavLink></li>
                        <li><NavLink to='/userportal/about'>About</NavLink></li>
                        <li><NavLink to='/userportal/products'>Products</NavLink></li>
                        <li><NavLink to='/userportal/cartitems'>Cart</NavLink></li>
                        <li><NavLink to='/'>Logout</NavLink></li>
                    </ul>
                }
            </div>
        </div> 
    </>
  )
}

export default NavBar
