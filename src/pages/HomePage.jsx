import React from "react"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import ApartmentList from "../components/ApartmentList"
import Footer from "../components/Footer"

import "./HomePage.scss"

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ApartmentList />
      <Footer />
    </div>
  )
}

export default HomePage
