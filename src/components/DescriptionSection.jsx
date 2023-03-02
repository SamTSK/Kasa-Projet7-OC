import React, { useState } from "react"
import "./DescriptionSection.scss"

export function DescriptionSection(props) {
  // Condition pour le dropdown
  const [isContentVisible, setIsContentVisible] = useState(false)
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    <div className="infos">
      <div className="description__section">
        <p className="description">
          <span>{props.title}</span>
          <span onClick={showContent}>
            <i
              className={`fa-sharp fa-solid fa-chevron-up ${
                isContentVisible ? "isOpen" : ""
              }`}
            />
          </span>
        </p>
        {isContentVisible && <p className="content">{props.content}</p>}
      </div>
    </div>
  )
}

export default DescriptionSection
