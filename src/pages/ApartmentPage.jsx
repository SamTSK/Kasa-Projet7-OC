import React from "react"
import "./ApartmentPage.scss"

function ApartmentPage() {
  return (
    <div className="apartment__page">
      <div>
        <img src="https://picsum.photos/800/400" alt="" />
      </div>
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
            <h3>Alexandre Dumas</h3>
            <div className="apartement__author__badge"></div>
          </div>
          <div className="apartement__author__stars">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
      </div>
      <div className="apartement__description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          fuga perferendis eum a atque provident architecto eius, neque ut ullam
          aspernatur dignissimos eos cum voluptatum quo qui voluptatem, quisquam
          quis.
        </p>
      </div>
      <div className="apartement__equipements">
        <p>Equipements</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          fuga perferendis eum a atque provident architecto eius, neque ut ullam
          aspernatur dignissimos eos cum voluptatum quo qui voluptatem, quisquam
          quis.
        </p>
      </div>
    </div>
  )
}

export default ApartmentPage
