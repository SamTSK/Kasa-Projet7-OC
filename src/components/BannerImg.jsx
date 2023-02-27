import React from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  return (
    <div className="banner__img">
      <img src={props.imageUrl} alt="" />
    </div>
  )
}

export default BannerImg
