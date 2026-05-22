import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    let location = useLocation()
    let pathBool = location.pathname.startsWith('/adminportal')
    // console.log(pathBool)

    return (
        <>
            <footer className="footer">
                <div className="top">
                    <div className="left">
                        <h1>ApnaMart</h1>
                        <p>
                            Your one stop destination for fashion, electronics,
                            accessories and much more.
                        </p>
                    </div>
                    <div className="center">
                        <h2>Quick Links</h2>
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
                    <div className="right">
                        <h2>Follow Us</h2>
                        <div className="icons">
                            <a href="#">
                                <FacebookIcon />
                            </a>
                            <a href="#">
                                <InstagramIcon />
                            </a>
                            <a href="#">
                                <TwitterIcon />
                            </a>
                            <a href="#">
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                        &copy; 2026 ApnaMart | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer