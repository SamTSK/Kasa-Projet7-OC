import React from "react"
import "./ApartmentList.scss"
import Apartment from "./Apartment"
import logements from "../data/logements.json"

function ApartmentList() {
  // const [apartments, setApartments] = useState([]);

  // useEffect(fecthApartments, []);
  // useEffect avec une array vide pour exécuter cette fonction au chargement du composant

  /* function fecthApartments() {
    fetch("../data/logements.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
  } */

  return (
    <div className="list">
      {logements.map((logement) => (
        <Apartment
          title={logement.title}
          imageUrl={logement.cover}
          id={logement.id}
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
