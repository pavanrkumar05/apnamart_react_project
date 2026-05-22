import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';

const ViewMore = () => {

    let params=useParams()
    let productId=params.id

    let[viewProduct,setViewProduct]=useState({})
    let navigate=useNavigate()

    let location=useLocation()
    let pathBool=location.pathname.startsWith(`/adminportal`)

    let fetchApi=async()=>{
        let apidata=await axios.get(`http://localhost:4000/products/${productId}`)
        setViewProduct(apidata.data)
    }

    useEffect(()=>{
        fetchApi()
    },[])

    let{id,title,category,price,description,image,rating}=viewProduct

    let closeCard=()=>{
        navigate(-1)
    }

    let addToCart=()=>{
        let bool=window.confirm(`Do u want to add this product to cart?`)
        if(bool){
            toast.success(`Product added to cart`)
            axios.post(`http://localhost:4000/cartitems`,viewProduct)
            navigate(`/userportal/cartitems`)
        }
        else{
            toast.info(`Product not added to cart`)
        }
    }

    let handleDelete=async()=>{
        let bool=window.confirm(`Do You Want To Delete This Product?`)
        if(bool){
            await axios.delete(`http://localhost:4000/products/${id}`)
            toast.success(`Product Deleted Successfully`)
            navigate(`/adminportal/products`)
        }
        else{
            toast.info(`Product Not Deleted`)
        }
    }

    let handleEdit=()=>{
        navigate(`/adminportal/editproduct/${id}`)
    }

  return (
    <>
      <div className="view-product">
        <div className="container">
            <div className="close">
                <CloseIcon onClick={closeCard}/>
            </div>
            <div className="left">
                <img src={image} alt={title} />
            </div>
            <div className="right">
                <h1>{title}</h1>
                <p className='category'>{category}</p>
                <h2>₹ {Math.floor(price*83)}</h2>
                <p className='description'>{description}</p>
                {
                    rating &&
                    <h3>
                        ⭐ {rating.rate} ({rating.count} reviews)
                    </h3>
                }
                {
                    pathBool
                    ?
                    <div className="btn">
                        <button className='edit' onClick={handleEdit}>
                            Edit &nbsp; <EditSquareIcon/>
                        </button>
                        <button className='del' onClick={handleDelete}>
                            Delete &nbsp; <DeleteIcon/>
                        </button>
                    </div>
                    :
                    <div className="btn">
                        <button className='edit' onClick={addToCart}>
                            Add To Cart &nbsp; <AddShoppingCartIcon/>
                        </button>
                    </div>
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewMore