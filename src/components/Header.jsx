import React from 'react'
import '../styles/Header.css'
import LogoHeader from '../assets/logo-wealthhealth.webp'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header">
        <Link className="header_link" to="/">
          <img
            className="header_logo"
            src={LogoHeader}
            alt="Wealth Health Logo"
          />
          <h1 className="header_text">Wealth Health</h1>
        </Link>
        <nav className="nav">
          <Link className="nav_item" to="/employee-list">
            <h2 className="nav_item_text">View current employees</h2>
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Header
