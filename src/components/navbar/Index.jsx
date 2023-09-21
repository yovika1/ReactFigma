import React from 'react'
import logo from './Logo.png'
import './index.css'
function Index() {
  return (
    <div>
      <div className='header'>
        <div className="brand_logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="Nav_opt">
          <ul>
            <li>Home</li>
            <li>Porfolio</li>
            <li>About Me</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="nav_btn">
            <button className='btn'>Contact</button>
        </div>
      </div>
      
    </div>
  )
}

export default Index