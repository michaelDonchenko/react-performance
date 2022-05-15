import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/assasas/sadsadas'>Not existing page</NavLink>
    </div>
  )
}

export default Navigation
