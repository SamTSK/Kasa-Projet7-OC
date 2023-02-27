import React, { useEffect, useState } from "react"
import "./ApartmentPage.scss"
import { useLocation } from "react-router-dom"
import { DescriptionSection } from "../components/DescriptionSection"
import { BannerImg } from "../components/BannerImg"
import { ApartmentHeader } from "../components/ApartmentHeader"

function ApartmentPage() {
  const location = useLocation
  const [flat, setFlat] = useState(null)

  function fetchApartmentData() {
    fetch("../data/logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.logementId)
        setFlat(flat)
      })
      .catch(console.error)
  }
  useEffect(fetchApartmentData, [])
  if (flat == null) return <div>loading...</div> // pendant une petite demi seconde j'aurai un loading,parce qu'en haut la valeut de selected flat est null

  return (
    <div className="apartment__page">
      <BannerImg imargeUrl={flat.cover} />
      <ApartmentHeader flat={flat} />
      <div className="infos__apropos">
        <DescriptionSection />
        <DescriptionSection />
      </div>
    </div>
  )
}
// au lieu de mettre toute la sélection title, description,... j'ai préféré raccourcir avec flat = {flat}

export default ApartmentPage
