import React from "react"
import "./DescriptionSection.scss"

export function DescriptionSection(props) {
  return (
    <div className="infos">
      <div className="description__section">
        <p className="description">
          <span>{props.title}</span>
          <span>
            <i className="fa-sharp fa-solid fa-chevron-up" />
          </span>
        </p>
        <p className="content">{props.content}</p>
      </div>
    </div>
  )
}

export default DescriptionSection
