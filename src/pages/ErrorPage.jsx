import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import "./ErrorPage.scss"

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="error__page">
        <h1>404</h1>
        <h2>Oups, la page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  )
}

export default ErrorPage
