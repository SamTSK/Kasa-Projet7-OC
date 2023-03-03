import React, { useState } from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  const { pictures } = props
  // Show picture
  const [currentPicture, setCurrentPicture] = useState(0)
  const getClassName = (i) => {
    if (i === currentPicture) return "show"
    return ""
  }
  // Move Next picture
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }
  // Move Previous picture
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

  // Default picture
  const arePicturesAvalable = () => pictures && pictures.length > 0

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvalable()) {
      return <img src="./images/about-img.png" className="show" alt="" />
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)} />
    ))
  }

  return (
    <div className="banner__img">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvalable() && (
        <>
          <button
            className="btn btn-previous"
            type="button"
            onClick={moveToPrevious}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" type="button" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </>
      )}
    </div>
  )
}

export default BannerImg
