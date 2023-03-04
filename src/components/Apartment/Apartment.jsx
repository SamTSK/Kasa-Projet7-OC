import React from "react"
import { Link } from "react-router-dom"
import "./Apartment.scss"
import PropTypes from "prop-types"

function Apartment(props) {
  const { title, imageUrl, id } = props
  const state = {
    id,
  }
  return (
    <div className="apartment">
      <Link to="/flat" state={state}>
        <img src={imageUrl} alt="" />
        <span className="apartment__title">{title}</span>
      </Link>
    </div>
  )
}
Apartment.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.string,
}
Apartment.defaultProps = {
  title: "",
  imageUrl: "",
  id: "",
}
export default Apartment
