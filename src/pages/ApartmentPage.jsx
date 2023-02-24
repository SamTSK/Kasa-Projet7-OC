import React from "react"
import "./ApartmentPage.scss"
import { DescriptionSection } from "../components/DescriptionSection"
import { BannerImg } from "../components/BannerImg"
import { ApartmentHeader } from "../components/ApartmentHeader"

function ApartmentPage() {
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
