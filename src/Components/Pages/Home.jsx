import React from 'react'
import {categoryImages} from '../../Components/store'
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="box">
          {
            categoryImages.map((img,index)=>(
              <img src={img} alt="" key={index} />
            ))
          }
        </div>
        <div className="info">
          <h1>APNA MART - SHOP SMART. </h1>
          <marquee behavior="scroll" direction="">🔥 Mega Deals Are Live! Up To 70% OFF | Free Shipping 🚚 | Easy Returns 🔄 | Shop Trending Products Today 🛍️</marquee>
        </div>
      </div>
    </>
  )
}

export default Home
