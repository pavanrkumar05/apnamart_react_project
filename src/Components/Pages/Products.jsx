import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { DoubleArrow } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'

const Products = () => {

  let [products, setProducts] = useState([])
  let [categorypro, setcategorypro] = useState([])
  let [favItems, setFavItems] = useState([])

  let navigate = useNavigate()

  let location = useLocation()
  let pathBool = location.pathname.startsWith(`/adminportal`)

  let fetchapi = async () => {
    let resdata = await axios.get('http://localhost:4000/products')
    setProducts(resdata.data)
    setcategorypro(resdata.data)
  }

  useEffect(() => {
    fetchapi()
  }, [])

  let handleviewmore = (productid) => {
    pathBool 
    ? navigate(`/adminportal/viewmore/${productid}`) 
    : navigate(`/userportal/viewmore/${productid}`)
  }

  let filterproducts = [
    'ALL',
    "men's clothing",
    "women's clothing",
    'jewelery',
    'electronics'
  ]

  let handlebtn = (category) => {
    if (category === 'ALL') {
      setcategorypro(products)
    }
    else {
      let filteredArray = products.filter((elem) => {
        return elem.category === category
      })
      setcategorypro(filteredArray)
    }
  }

  let handlebool = (id) => {
    if (favItems.includes(id)) {
      let removeFav = favItems.filter((elem) => elem !== id)
      setFavItems(removeFav)
    } else {
      setFavItems([...favItems, id])
    }
  }

  return (
    <>
      <div className="products">
        <div className="header">
          <h1>PRODUCTS</h1>
          <div className='filter-btn'>
            <ul>
              {
                filterproducts.map((elem, index) => {
                  return (
                    <li key={index}>
                      <button onClick={() => handlebtn(elem)}>
                        {elem}
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
              {
                pathBool 
                &&
                <button
                  className="header-btn"
                  onClick={() => navigate('/adminportal/addproducts')}>
                  Add Product <DoubleArrow />
                </button>
              }
        </div>
        <div className="container">
          {
            categorypro.map((elem, index) => {
              let { id, title, image, category } = elem
              return (
                <div className="card" key={index}>
                  <div className='top'>
                    <div className="cate">
                      {category}
                    </div>
                    <button
                      className={`wish ${favItems.includes(id) ? 'active' : ''}`}
                      onClick={() => handlebool(id)}>
                      {
                        favItems.includes(id)? <FavoriteIcon /> : <FavoriteBorderIcon />
                      }
                    </button>
                  </div>
                  <div className="img">
                    <img src={image} alt="No Image" />
                  </div>
                  <div className="title">
                    {title}
                  </div>
                  <div className="btn">
                    <button
                      className='view'
                      onClick={() => handleviewmore(id)}>
                      ViewMore &nbsp;
                      <DoubleArrow />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Products