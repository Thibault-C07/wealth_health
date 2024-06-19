import React from 'react'
import '../styles/Header.css'
import LogoHeader from '../assets/logo-wealthhealth.webp'

const Header = () => {
  return (
    <>
      <header>
        <img
          className="logo-homepage"
          src={LogoHeader}
          alt="Logo de Weath Health représentant une sorte de rosace verte."
        />
        <h1>Wealth Health</h1>
      </header>
    </>
  )
}

export default Header
