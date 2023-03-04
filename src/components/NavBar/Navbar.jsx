import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img
          className="navbar__logo__img"
          src="./images/logo.png"
          alt="logo du site"
        />
      </NavLink>
      <NavLink to="/" className="navbar__list__accueil">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div className="navbar__list__propos">A propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar
