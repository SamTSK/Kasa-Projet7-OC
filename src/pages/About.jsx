import React from "react"
import { DescriptionSection } from "../components/DescriptionSection"
import BannerImg from "../components/BannerImg"
import "./About.scss"

function About() {
  return (
    <>
      <BannerImg />
      <div className="about__container">
        <DescriptionSection />
        <DescriptionSection />
        <DescriptionSection />
        <DescriptionSection />
      </div>
    </>
  )
}

export default About
