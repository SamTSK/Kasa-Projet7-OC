import React from "react"
import { Link } from "react-router-dom"
import "./Apartment.scss"
import PropTypes from "prop-types"

function Apartment(props) {
  const {
    title,
    /* pictures,
    id,
    cover,
    description,
    host,
    rating,
    location,
    equipments,
    tags, */
  } = props
  return (
    <div className="apartment">
      <Link to="/flat">
        <span className="apartment__title">{title}</span>
        {/* <span>{id}</span>
      <span>{cover}</span>
      <img src={pictures} alt="images" />
      <span>{description}</span>
      <span>{host}</span>
      <span>{rating}</span>
      <span>{location}</span>
      <span>{equipments}</span>
      <span>{tags}</span> */}
      </Link>
    </div>
  )
}
Apartment.PropTypes = {
  title: PropTypes.string,
  /* id: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.string,
  description: PropTypes.string,
  host: PropTypes.string,
  rating: PropTypes.string,
  location: PropTypes.string,
  equipments: PropTypes.string, */
}
export default Apartment
