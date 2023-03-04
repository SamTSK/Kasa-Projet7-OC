import React from "react"
import "./ApartmentHeader.scss"

export function ApartmentHeader(props) {
  const { flat } = props
  const { name } = flat.host
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
            {flat.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
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
              {[1, 2, 3, 4, 5].map((num) => (
                <span key={num} className={flat.rating >= num ? "on" : ""}>
                  <i className="fa-sharp fa-solid fa-star" />
                </span>
              ))}
              {/* <span className="on"><i className="fa-sharp fa-solid fa-star" /></span>
                <span className="on"><i className="fa-sharp fa-solid fa-star" /></span>
                <span className="on"><i className="fa-sharp fa-solid fa-star" /></span>
                <span><i className="fa-sharp fa-solid fa-star" /></span>
                <span><i className="fa-sharp fa-solid fa-star" /></span> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentHeader
