import React, { useState } from "react"

import * as styles from "../styles/box.module.scss"

const Box = ({ children }) => {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}

export default Box
