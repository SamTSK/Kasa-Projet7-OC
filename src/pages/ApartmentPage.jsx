import React from "react"
import "./ApartmentPage.scss"
import { DescriptionSection } from "../components/DescriptionSection"
import { BannerImg } from "../components/BannerImg"
import { ApartmentHeader } from "../components/ApartmentHeader"
// import {useLocation} from "react-router-dom"

function ApartmentPage() {
  // const location = useLocation // Aller sur un apt distinct à partir de ma homepage 
  return (
    <div className="apartment__page">
      <BannerImg />
      <ApartmentHeader />
      <div className="infos__apropos">
        <DescriptionSection />
        <DescriptionSection />
      </div>
    </div>
  )
}

export default ApartmentPage
