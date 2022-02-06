import React from "react"
import * as styles from "../styles/video.module.scss"

const Video = ({ src, caption }) => {
  return (
    <div className={styles.videoContainer}>
      <video loop controls>
        <source src={src} type="video/mp4" />
      </video>

      <figcaption>{caption}</figcaption>
    </div>
  )
}

export default Video
