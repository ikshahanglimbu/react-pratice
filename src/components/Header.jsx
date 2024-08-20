import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white px-5 py-2 flex justify-between '>

      <h1>Demo</h1>

      <nav className='space-x-4'>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header
