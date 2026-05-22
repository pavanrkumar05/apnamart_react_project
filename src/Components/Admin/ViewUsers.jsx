import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewUsers = () => {

    let [users, setUsers] = useState([])

    let navigate = useNavigate()

    let fetchUsers = async () => {
        let res = await axios.get('http://localhost:4000/users')
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    let handleDelete = async (id) => {
        let bool = window.confirm(`Do You Want To Delete This User?`)
        if(bool){
            await axios.delete(`http://localhost:4000/users/${id}`)
            toast.error('User Deleted Successfully')
            fetchUsers()
        }
        else{
            toast.info(`User Not Deleted`)
        }
    }

    return (
        <>
            <div className="view-users">
                <div className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <h1>User Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((elem, index) => {
                                let { id, username, contact, dob, email } = elem
                                return (
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>{username}</td>
                                        <td>{contact}</td>
                                        <td>{dob}</td>
                                        <td>{email}</td>
                                        <td>
                                            <button className='dlt-btn' onClick={() => handleDelete(id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewUsers