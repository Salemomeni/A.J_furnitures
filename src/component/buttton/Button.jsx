import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
const Button = ({children,btnStyle, link }) => {
  return (
    <button className={btnStyle}><Link className='buttonLinK' to = {link} as ={Link}>{children}</Link></button>
  )
}

export default Button