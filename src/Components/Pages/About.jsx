import React from 'react'
import img1 from '../../assets/Images/work2.jpg'
import img2 from '../../assets/Images/work.jpg'

const About = () => {
  return (
    <>
       <div className="about">
        <div className="top">
          <img src={img1} alt="" />
          <div className="container">
            <h1>About ApnaMart</h1>
            <p>
              Your one-stop destination for fashion, electronics,
              lifestyle, and everyday essentials.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="left">
            <img
              src={img2}
              alt="About"
            />
          </div>
          <div className="right">
            <h2>Who We Are</h2>
            <p>
              ApnaMart is a modern e-commerce platform designed to
              provide customers with a smooth and enjoyable shopping
              experience. We offer high-quality products across
              multiple categories with affordable pricing and fast delivery.
            </p>
            <p>
              Our mission is to make online shopping simple,
              secure, and accessible for everyone.
            </p>
          </div>
        </div>
        <div className="features">
          <h2>Why Choose Us?</h2>
          <div className="feature-box">
            <div className="card">
              <h3>Fast Delivery</h3>
              <p>Quick and reliable doorstep delivery.</p>
            </div>
            <div className="card">
              <h3>Secure Payment</h3>
              <p>Safe and trusted payment methods.</p>
            </div>
            <div className="card">
              <h3>Premium Products</h3>
              <p>Top quality products at best prices.</p>
            </div>
            <div className="card">
              <h3>24/7 Support</h3>
              <p>Dedicated customer support anytime.</p>
            </div>
          </div>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become one of the most trusted online shopping
            platforms by delivering excellent products and
            customer satisfaction.
          </p>
        </div>
      </div>
    </>
  )
}

export default About