import React, { useState } from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  //const imageUrl = props.imageUrl ? props.imageUrl : "https://picsum.photos/1920/1080"
  const pictures = props.pictures
  // Show picture
  const [currentPicture, setCurrentPicture] = useState(0)
  const getClassName = (i) => {
    if (i === currentPicture) return "show"
    return ""
  }
  // Move current picture
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  return (
    <div className="banner__img">
      {/*<img src={imageUrl} alt="" /> */}
      <div className="image__container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>
      <button onClick={moveToNext}>Next</button>
      <button>Previous</button>
    </div>
  )
}

export default BannerImg
