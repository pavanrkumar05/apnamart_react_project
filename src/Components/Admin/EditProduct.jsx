import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditProduct = () => {

    let { id } = useParams()
    let navigate = useNavigate()

    let [formData, setFormData] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }
    })

    let fetchProduct = async () => {
        let res = await axios.get(`http://localhost:4000/products/${id}`)
        setFormData(res.data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    let handleInput = (e) => {
        let key = e.target.name
        let value = e.target.value
        if (key === "rate" || key === "count") {
            setFormData({
                ...formData,
                rating: {
                    ...formData.rating,
                    [key]: value
                }
            })
        }
        else {
            setFormData({
                ...formData,
                [key]: value
            })
        }
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/products/${id}`, formData)
        toast.success(`Product Updated Successfully`)
        navigate(`/adminportal/products`)
    }

    return (
        <>
            <div className="edit-product">
                <div className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Edit Product</h1>
                    <div className="input-box">
                        <label>Product Title</label>
                        <input
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={handleInput}
                            placeholder='Enter Product Title'
                        />
                    </div>
                    <div className="input-box">
                        <label>Category</label>
                        <select name='category' value={formData.category} onChange={handleInput}>
                            <option value="">-- Select Category --</option>
                            <option value="men's clothing">MENS CLOTHING</option>
                            <option value="women's clothing">WOMENS CLOTHING</option>
                            <option value="electronics">ELECTRONICS</option>
                            <option value="jewelery">JEWELERY</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label>Price</label>
                        <input
                            type="text"
                            name='price'
                            value={formData.price}
                            onChange={handleInput}
                            placeholder='Enter Product Price'
                        />
                    </div>
                    <div className="input-box">
                        <label>Image URL</label>
                        <input
                            type="text"
                            name='image'
                            value={formData.image}
                            onChange={handleInput}
                            placeholder='Enter Image URL'
                        />
                    </div>
                    <div className="input-box">
                        <label>Rating</label>
                        <input
                            type="text"
                            name='rate'
                            value={formData.rating.rate}
                            onChange={handleInput}
                            placeholder='Enter Rating'
                        />
                    </div>
                    <div className="input-box">
                        <label>Rating Count</label>
                        <input
                            type="text"
                            name='count'
                            value={formData.rating.count}
                            onChange={handleInput}
                            placeholder='Enter Rating Count'
                        />
                    </div>
                    <div className="input-box">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInput}
                            placeholder='Enter Description'
                        ></textarea>
                    </div>
                    <button>Update Product</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct