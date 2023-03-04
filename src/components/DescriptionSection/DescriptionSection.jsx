import React, { useState } from "react"
import "./DescriptionSection.scss"

export function DescriptionSection(props) {
  // Condition pour le dropdown
  const [isContentVisible, setIsContentVisible] = useState(false)
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }
  const { title, content } = props
  return (
    <div className="infos">
      <div className="description__section">
        <p className="description">
          <span>{title}</span>
          <span onClick={showContent} aria-hidden="true">
            <i
              className={`fa-sharp fa-solid fa-chevron-up ${
                isContentVisible ? "isOpen" : ""
              }`}
            />
          </span>
        </p>
        {isContentVisible && <p className="content">{content}</p>}{" "}
        {/* le && va me vérifier si 2 conditions sont vrais */}
      </div>
    </div>
  )
}

export default DescriptionSection
