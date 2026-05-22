import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';

const CartItems = () => {

  let [cartitems, setCartitems] = useState([])
  let navigate = useNavigate()

  let fetchApi = async () => {
    let resp = await axios.get(`http://localhost:4000/cartitems`)
    setCartitems(resp.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  let handlePlaceOrder = async () => {
    let bool = window.confirm(`Do You Want To Place Order?`)
    if (bool) {
      await Promise.all(
        cartitems.map((item) =>
          axios.delete(`http://localhost:4000/cartitems/${item.id}`)
        )
      )
      toast.success(`Order Placed Successfully`)
      navigate(`/userportal/orderplaced`)
    }
    else {
      toast.info(`Order Not Placed`)
    }
  }

  let handleItem = (itemid) => {
    navigate(`/userportal/viewmore/${itemid}`)
  }

  let handleDelete = async (id) => {
    let bool = window.confirm(`Do You Want To Remove This Item?`)
    if (bool) {
      await axios.delete(`http://localhost:4000/cartitems/${id}`)
      toast.error(`Item Removed From Cart`)
      fetchApi()
    }
    else {
      toast.info(`Item Not Removed`)
    }
  }

  return (
    <>
      <div className="cart-page">
        <div className="cartitems">
          {
            cartitems.length > 0
              ?
              <>
              <div className="cart-heading">
                <h1>Cart Items</h1>
                <p>Your selected products ready for checkout</p>
              </div>
                <table>
                  <thead>
                    <tr>
                      <th>Item No.</th>
                      <th>Image</th>
                      <th>View</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartitems.map((elem, index) => {
                        let { id, title, image, price } = elem
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={image} alt="No image" />
                            </td>
                            <td>
                              <button onClick={() => handleItem(id)}>
                                View Item
                              </button>
                            </td>
                            <td className='title'>
                              {title}
                            </td>
                            <td>1</td>
                            <td>
                              ₹ {Math.floor(price * 83)}
                            </td>
                            <td>
                              <button className='delete-btn' onClick={() => handleDelete(id)}>
                                <DeleteIcon />
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                    <tr className='total'>
                      <th colSpan={6}>
                        Total Amount
                      </th>
                      <td>
                        ₹ {
                          Math.floor(
                            cartitems.reduce((total, item) => {
                              return total + (item.price * 83)
                            }, 0)
                          )
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn">
                  <button className='order' onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                </div>

              </>
              :
              <div className="empty-cart">
                <h1>Your Cart Is Empty</h1>
                <p>
                  Browse products and add your favorite items
                </p>
                <button onClick={() => navigate('/userportal/products')}>
                  Browse Products
                </button>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default CartItems