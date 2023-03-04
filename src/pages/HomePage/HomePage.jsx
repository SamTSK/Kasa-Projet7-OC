import React from "react"
import Navbar from "../../components/NavBar/Navbar"
import Banner from "../../components/Banner/Banner"
import ApartmentList from "../../components/ApartmentList/ApartmentList"
import Footer from "../../components/Footer/Footer"

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
