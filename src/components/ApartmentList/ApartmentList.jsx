import React from "react"
import "./ApartmentList.scss"
import Apartment from "../Apartment/Apartment"
import logements from "../../data/logements.json"

function ApartmentList() {
  return (
    <div className="list">
      {logements.map((logement) => (
        <Apartment
          title={logement.title}
          imageUrl={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  )
}

export default ApartmentList
