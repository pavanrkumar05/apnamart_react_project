import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

  let [formdata,setFormdata]=useState({email:"",password:""})
  let [err,setErr]=useState("")

  let navigate = useNavigate()

  let handleInput=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    let{email,password}=formdata
    let adminCredentials={
      admin_mail:"admin@gmail.com",
      admin_pswd:"Admin@123"
    }
    let{admin_mail,admin_pswd}=adminCredentials
    if(email === admin_mail){
      if(password === admin_pswd){
        setErr('')
        navigate('/adminportal')
        toast.success('Login Successfull')
      }
      else{
       setErr(<h4 style={{ color: "red", textAlign:"center"}}>Password is invalid</h4>)
       toast.error('Password is Invalid')
      }
    }
    else{
      setErr(<h4 style={{ color: "red", textAlign:"center"}}>Email is invalid</h4>)
      toast.error('Email is Invalid')
    }
  }
  
  return (
    <>
      <div className="admin-login">
        <h2>Admin Login Page</h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder='Enter Email Address'
              onChange={handleInput}
              name='email'
              value={formdata.email}
              />
            <input 
              type="password" 
              placeholder='Enter Password'
              onChange={handleInput}
              name='password'
              value={formdata.password}
              />
              <div>{err}</div>
            <button>Admin Login</button>
        </form>
      </div>
    </>
  )
}

export default AdminLogin