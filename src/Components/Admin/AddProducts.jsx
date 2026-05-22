import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddProducts = () => {

    let navigate = useNavigate()

    let [formdata, setFormData] = useState({
        title: "",
        price: undefined,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: undefined,
            count: undefined
        }
    })

    let handleInput = (e) => {
        let key = e.target.name
        let value = e.target.value
        if (key === "rate" || key === "count") {
            setFormData({
                ...formdata,
                rating: {
                    ...formdata.rating,
                    [key]: value
                }
            })
        } 
        else {
            setFormData({
                ...formdata,
                [key]: value
            })
        }
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/products', formdata)
        toast.success('Product Added Successfully')
        navigate('/adminportal/products')
    }

    return (
        <>
            <div className="add-products">
                <div className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <h1>Add Products</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Enter Title Name'
                            name='title'
                            value={formdata.title}
                            onChange={handleInput}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Enter Price'
                            name='price'
                            value={formdata.price}
                            onChange={handleInput}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Enter Description'
                            name='description'
                            value={formdata.description}
                            onChange={handleInput}
                            required
                        />
                        <select name='category' onChange={handleInput} required>
                            <option value="">--Select Category--</option>
                            <option value="men's clothing">MENS CLOTHING</option>
                            <option value="women's clothing">WOMENS CLOTHING</option>
                            <option value="electronics">ELECTRONICS</option>
                            <option value="jewelery">JEWELERY</option>
                        </select>
                        <input
                            type="text"
                            placeholder='Enter Image URL'
                            name='image'
                            value={formdata.image}
                            onChange={handleInput}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Enter Rating'
                            name='rate'
                            value={formdata.rating.rate}
                            onChange={handleInput}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Enter Count'
                            name='count'
                            value={formdata.rating.count}
                            onChange={handleInput}
                            required
                        />
                        <button type='submit'>
                            Add Products
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProducts