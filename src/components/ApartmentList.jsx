import React, { useEffect, useState } from "react"
import "./ApartmentList.scss"
import Apartment from "./Apartment"
import logements from "../data/logements.json"

function ApartmentList() {
  const [apartments, setApartments] = useState([])

  function fetchApartments() {
    fetch("../data/logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error)
  }
  useEffect(fetchApartments, [])

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
