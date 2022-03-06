import React, { useState } from "react"

import * as styles from "../styles/hover.module.scss"

const Hover = ({ children }) => {
  const [isHover, setHover] = useState(false)
  const [location, setLocation] = useState({ x: 0, y: 0 })

  return (
    <span className={styles.container}>
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={({ pageX: x, pageY: y }) =>
          setLocation({ left: `${x + 10}px`, top: `${y + 10}px` })
        }
      >
        {children[0]}
      </span>

      {isHover && (
        <div className={styles.hover} style={location}>
          {children.slice(1)}
        </div>
      )}
    </span>
  )
}

export default Hover
