import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-ele nav-content'>Home</div>
      <div className='dropdown'>
      <button className='dropbtn nav-content'>About</button>
      <div className='dropdown-content'>
        <a href='#'>Welcome to Password Strength Checker, your go-to tool for assessing the security of your passwords. We understand the importance of online security, and we're here to help you make sure your passwords are strong and robust.</a>
      </div>
    </div>
    </div>
  )
} 
export default Navbar


