import React from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  // const imageUrl = props.imageUrl ? props.imageUrl : "https://picsum.photos/1920/1080"
  const pictures = props.pictures

  return (
    <div className="banner__img">
      {/* <img src={imageUrl} alt="" /> */}
      {pictures.map((pic) => (
        <img key={pic} src={pic} alt="" />
      ))}
    </div>
  )
}

export default BannerImg
