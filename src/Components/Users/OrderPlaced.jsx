import React from 'react'
import img1 from '../../assets/Images/orderplaced.gif'
import { useNavigate } from 'react-router-dom'

const OrderPlaced = () => {

    let navigate = useNavigate()

    return (
        <>
            <div className="orderplaced">
                <div className="container">
                    <img src={img1} alt="Order Placed" />
                    <h1>Order Placed Successfully</h1>
                    <p>
                        Thank you for shopping with ApnaMart
                    </p>
                    <button onClick={() => navigate('/userportal/')}>
                        Visit Home
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderPlaced