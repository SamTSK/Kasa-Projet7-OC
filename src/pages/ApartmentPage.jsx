import React, { useEffect, useState } from "react"
import "./ApartmentPage.scss"
import { useLocation } from "react-router-dom"
import { DescriptionSection } from "../components/DescriptionSection"
import { BannerImg } from "../components/BannerImg"
import { ApartmentHeader } from "../components/ApartmentHeader"
import logements from "../data/logements.json"

function ApartmentPage() {
  const { state } = useLocation()
  const [flat, setFlat] = useState(null)
  useEffect(() => {
    setFlat(logements.find((logement) => logement.id === state.id))
  }, [])

  if (flat == null) return <div>loading...</div> // pendant une petite demi-seconde j'aurai un loading,parce qu'en haut la valeut de selected flat est null

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
