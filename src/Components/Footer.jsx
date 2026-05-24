import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                            // admin footer
                            <ul>
                                <li><NavLink to='/adminportal/'>Home</NavLink></li>
                                <li><NavLink to='/adminportal/products'>Products</NavLink></li>
                                <li><NavLink to='/adminportal/addusers'>Users</NavLink></li>
                                <li><NavLink to='/'>Logout</NavLink></li>
                            </ul>
                            :
                            // user footer
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
                            <NavLink to='https://www.instagram.com/pavan_reddy1705?igsh=Z2cwbWNybHBzZjhz'>
                                <InstagramIcon />
                            </NavLink>
                            <NavLink to='https://www.linkedin.com/in/pavan-kumar-r-605738252/'>
                                <LinkedInIcon/>
                            </NavLink>
                            <NavLink to='https://github.com/pavanrkumar05'>
                                <GitHubIcon />
                            </NavLink>
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