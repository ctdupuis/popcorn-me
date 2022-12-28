import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Header.css"

export default function Header() {
  return (
    <header className='banner'>
        <div className='logo'>
          <Link to="/">
            Popcorn & Me
          </Link>
        </div>
        <div className='nav'>
          <div className="nav-item">
            <Link to="/movies">All movies</Link>
          </div>
          <div className="nav-item">
            <Link to="/movies">All movies</Link>
          </div>
          <div className="nav-item">
            <Link to="/movies">All movies</Link>
          </div>
        </div>
    </header>
  )
}
