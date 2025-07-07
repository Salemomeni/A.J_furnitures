import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to delivering high-quality products that enhance comfort,
            aesthetics, and functionality for our customers. Our mission is to make
            premium design accessible to everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <p>
            Our team specializes in offering curated collections of furniture and decor
            for modern homes and offices. We combine style, durability, and innovation to
            bring your spaces to life.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Innovation & Quality</li>
            <li>Transparency</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
