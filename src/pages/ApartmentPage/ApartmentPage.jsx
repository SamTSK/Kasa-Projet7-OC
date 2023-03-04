import React, { useEffect, useState } from "react"
import "./ApartmentPage.scss"
import { useLocation } from "react-router-dom"
import { DescriptionSection } from "../../components/DescriptionSection/DescriptionSection"
import { BannerImg } from "../../components/BannerImg/BannerImg"
import { ApartmentHeader } from "../../components/ApartmentHeader/ApartmentHeader"
import logements from "../../data/logements.json"

function ApartmentPage() {
  const { state } = useLocation()
  const [flat, setFlat] = useState(null)
  useEffect(() => {
    setFlat(logements.find((logement) => logement.id === state.id))
  }, [])

  if (flat == null) return <div>loading...</div>

  return (
    <div className="apartment__page">
      <BannerImg pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="infos__apropos">
        <DescriptionSection title="Description" content={flat.description} />
        <DescriptionSection
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default ApartmentPage
