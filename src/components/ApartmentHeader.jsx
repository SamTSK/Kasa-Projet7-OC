import React from "react"
import "./ApartmentHeader.scss"

export function ApartmentHeader(props) {
  const flat = props.flat
  const name = flat.host.name
  const [firtName, lastName] = name.split(" ")

  return (
    <div>
      <div className="apartment__title_author">
        <div className="apartment__title">
          <h1>{flat.title}</h1>
          <h2>{flat.location}</h2>
          <div className="apartment__tags">
            {/* <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span> */}
            {flat.tags.map((tag) => (<span>{tag}</span>))}
          </div>
        </div>
        <div className="apartement__author">
          <div className="apartment__author__details">
            <h3>
              <span>{firtName}</span>
              <span>{lastName}</span>
            </h3>
            <div className="apartement__author__badge">
              <img src={flat.host.picture} alt="" />
            </div>
          </div>
          <div className="apartement__author__stars">
            <span className="bloc__stars">
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i
                className="fa-sharp fa-solid fa-star"
                style={{ color: "rgba(227, 227, 227, 1)" }}
              />
              <i
                className="fa-sharp fa-solid fa-star"
                style={{ color: "rgba(227, 227, 227, 1)" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentHeader
