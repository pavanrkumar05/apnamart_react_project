import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersLogin = () => {

  let [formdata, setFormdata] = useState({
    email: "",
    pswd: ""
  })

  let [users, setUsers] = useState([])
  let navigate=useNavigate()

  let handleInput = (e) => {
    let key = e.target.name
    let val = e.target.value

    setFormdata({
      ...formdata,
      [key]: val
    })
  }

  let fetchApi = async () => {
    let resp = await axios.get(`http://localhost:4000/users`)
    setUsers(resp.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  let handleSubmit = (e) => {
    e.preventDefault()
    let allUserEmail = users.map(elem=>elem.email)
    let allUserPassword = users.map(elem=>elem.password)
    let emailIndex=allUserEmail.indexOf(formdata.email)
    let passwordIndex=allUserPassword.indexOf(formdata.pswd)
    if(emailIndex !==-1 && passwordIndex !==-1){
      if(emailIndex === passwordIndex){
        navigate(`/userportal`)
        toast.success('Login Successfull')
      }
      else{
        toast.error('Invalid email or password')
      }
    }
    else{
      toast.error('Invalid email or password')
    }
  }

  return (
    <>
      <div className="users-login">
        <h2>User Login Page</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Enter Email Address'
            name='email'
            value={formdata.email}
            onChange={handleInput}
            required
          />
          <input
            type="password"
            placeholder='Enter Password'
            name='pswd'
            value={formdata.pswd}
            onChange={handleInput}
            required
          />
          <button>User Login</button>
        </form>
      </div>
    </>
  )
}

export default UsersLogin