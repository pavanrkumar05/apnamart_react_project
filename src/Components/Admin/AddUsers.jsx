import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {

    let navigate = useNavigate()

    let [formdata, setFormdata] = useState({
        username: "",
        contact: "",
        dob: "",
        email: "",
        password: "",
    })

    let handleInput = (e) => {
        let key = e.target.name
        let val = e.target.value
        setFormdata({ ...formdata, [key]: val })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:4000/users`, formdata)
        toast.success('User Added Successfully')
        setFormdata({
            username: "",
            contact: "",
            dob: "",
            email: "",
            password: "",
        })
    }

    return (
        <>
            <div className="add-users">
                <div className="container">
                    <h1>Add Users</h1>
                </div>
                <form className="formbox" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter User Name'
                        name='username'
                        value={formdata.username}
                        onChange={handleInput}
                        required
                    />
                    <input
                        type="tel"
                        placeholder='Enter Mobile Number'
                        pattern='[6-9]{1}[0-9]{9}'
                        name='contact'
                        value={formdata.contact}
                        onChange={handleInput}
                        required
                    />
                    <input
                        type="date"
                        name='dob'
                        value={formdata.dob}
                        onChange={handleInput}
                        required
                    />
                    <input
                        type="email"
                        placeholder='Enter Email Id'
                        name='email'
                        value={formdata.email}
                        onChange={handleInput}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name='password'
                        value={formdata.password}
                        onChange={handleInput}
                        required
                    />
                    <button type='submit'>
                        Submit
                    </button> 
                    <button type='button' className='view-btn' onClick={() => navigate('/adminportal/viewusers')}>
                        View Users
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddUsers