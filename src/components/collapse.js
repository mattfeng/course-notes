import React, { useState } from "react"

import * as styles from "../styles/collapse.module.scss"

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <div className={styles.containerOpen}>
        <div onClick={() => setShow(false)} className={styles.title}>
          <span className={styles.normal}>&#9660;</span> {title}
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className={styles.containerClosed}>
      <div className={styles.title} onClick={() => setShow(true)}>
        <span className={styles.normal}>&#9654;</span> {title}
      </div>
    </div>
  )
}

export default Collapse
