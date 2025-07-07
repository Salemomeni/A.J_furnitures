import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import logo from '../../assets/images/Gemini_Generated_Image_gqn6svgqn6svgqn6-removebg-preview.png'
import Button from '../buttton/Button'

const NavBar = () => {
  const [login, setLogin] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleLogin = () => setLogin(!login)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'show' : ''}`}>
        <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={toggleSidebar} />
        <li>HOME</li>
        <li>PROFILE</li>
        <li>COLLECTIONS</li>
        <li>CLEARANCE</li>
        <li>ABOUT</li>
        <li>CHART</li>
        <li>LOGIN</li>
        <li>SOCAILS</li>
      </div>

      {/* Navbar */}
      <div className='nav-container'>
        <div className='logoSection'>
          <div className='logo '>
            <img src={logo} alt="logo" />
          </div>
           
          <ul className='nav-links'>
            <li><Link className='Link' to='/collections'>Collections</Link></li>
            <li>Clearance</li>
            <li> <Link className='Link'to='/about' as = {Link}>About</Link></li>
          </ul>
        </div>

        <div className='contactSection'>
          <li><FontAwesomeIcon icon={faCartShopping} /></li>
          <li > <Link className='Link' to= '/profile' as = {Link}> <FontAwesomeIcon icon={faUser} /> </Link> </li>
          <Button btnStyle='contactUs' link='/contact' >Contact us</Button>
           <FontAwesomeIcon icon={faBars} className='hamburger' onClick={toggleSidebar} />

          {/* Login Popup */}
          <div style={{ display: login ? 'block' : 'none' }} className="sub-menu-wrap">
            <div className="sub-menu">
              <form>
                <div className='d-flex flex-column gap-3'>
                  <input type="email" placeholder='email@gmail.com' />
                  <input type="password" placeholder='Password' />
                </div>
                <div className='d-flex gap-2 mt-2'>
                  <input type="checkbox" />
                  <label> Remember me </label>
                </div>
                <div><Button btnStyle='login'>Login</Button></div>
              </form>
              <p>I don't have an account <span><Link onClick={toggleLogin} to='/signUp'>Sign Up</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
