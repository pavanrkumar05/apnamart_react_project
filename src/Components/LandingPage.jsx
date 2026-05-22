import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'

const LandingPage = () => {

    let [bool,setBool]= useState(true)
    let handleBtn=()=>{
        setBool(!bool)
    }
    
  return (
    <>
      <div className="landing-page">
        <h1>Welcome to Apna Mart</h1>
        <div className="container">
            <div className="btn-box">
                <button onClick={handleBtn} className={bool?'left':'right'}>
                    {bool?'Admin':'User'}
                </button>
            </div>
            <div className="form-box">
              {bool?<AdminLogin/>:<UsersLogin/>}
            </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
