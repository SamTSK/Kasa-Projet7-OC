import React from "react"
import "./DescriptionSection.scss"

export function DescriptionSection() {
  return (
    <div className="infos">
      <div className="description__section">
        <p className="description">
          <span>Description</span>
          <span>
            <i className="fa-sharp fa-solid fa-chevron-up" />
          </span>
        </p>
        <p className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          fuga perferendis eum a atque provident architecto eius, neque ut ullam
          aspernatur dignissimos eos cum voluptatum quo qui voluptatem, quisquam
          quis.
        </p>
      </div>
    </div>
  )
}

export default DescriptionSection
