import React, { useState } from "react"

import * as styles from "../styles/collapse.module.scss"

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <div className={styles.container}>
        <div onClick={() => setShow(false)} className={styles.title}>
          &#9654; {title}
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => setShow(true)}>
        &#9654; {title}
      </div>
    </div>
  )
}

export default Collapse
