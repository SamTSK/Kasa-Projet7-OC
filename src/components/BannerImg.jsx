import React, { useState } from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  // const imageUrl = props.imageUrl ? props.imageUrl : "https://picsum.photos/1920/1080"
  const { pictures } = props
  // Show picture
  const [currentPicture, setCurrentPicture] = useState(0)
  const getClassName = (i) => {
    if (i === currentPicture) return "show"
    return ""
  }
  // Move Next picture
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length) // % pictures.length c'est un modulo. en gros quand je lance ma function qui est = à 0, puis 1, 2.. et je lui dit de ne jamais dépasser pictures.length
  }
  // Move Previous picture
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1 // Au début notre current picture est = à 0, et je lui dis, que le nouveau sera -1, mais attention, si c'est klkchose qui est inférieur à O, il faut que notre nouvel index sera "pictures.length -1" et return, tu t'arrêtes. Et sinon tu me fait un (currentPicture - 1)
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

  // Default picture
  const arePicturesAvalable = () => {
    return pictures && pictures.length > 0
  }

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvalable()) {
      return <img src="./images/about-img.png" className="show" alt="" />
    } // s'il n'y a pas pictures ou que le pictures.length n'est pas bon dans ce là tu nous return une image, et sinon tu nous renvoie pictures.map...
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)} />
    ))
  }

  return (
    <div className="banner__img">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvalable() && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fa-solid fa-chevron-left" />
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </>
      )}
    </div>
  )
}

export default BannerImg
