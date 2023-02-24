import React from "react"
import "./ApartmentHeader.scss"

export function ApartmentHeader() {
  return (
    <div>
      <div className="apartment__title_author">
        <div className="apartment__title">
          <h1>Cosy loft on the Canal Saint-Martin</h1>
          <h2>Paris, île-de-France</h2>
          <div className="apartment__tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="apartement__author">
          <div className="apartment__author__details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartement__author__badge"></div>
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
