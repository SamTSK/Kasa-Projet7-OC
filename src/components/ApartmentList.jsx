import React from "react"
import "./ApartmentList.scss"
import Apartment from "./Apartment"
import logements from "../data/logements.json"

console.log(logements)
function ApartmentList() {
  return (
    <div className="list">
      {logements.map((logement) => (
        <Apartment
          title={logement.title}
          /* id={logement.id}
          cover={logement.cover}
          pictures={logement.pictures}
          description={logement.description}
          host={logement.host}
          rating={logement.rating}
          location={logement.location}
          equipments={logement.equipments}
          tags={logement.tags} */
        />
      ))}
    </div>
  )
}

export default ApartmentList
