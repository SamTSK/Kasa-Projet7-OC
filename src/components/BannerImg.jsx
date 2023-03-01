import React from "react"
import "./BannerImg.scss"

export function BannerImg(props) {
  return (
    <div className="banner__img">
      <img src={props.imageUrl} alt="" />
     {/* <img src="https://picsum.photos/200/300" alt="" /> */}
    </div>
  )
}

export default BannerImg
