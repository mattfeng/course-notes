import React, { Component } from "react"

import * as styles from "../styles/tag.module.scss"

class Tag extends Component {
  render() {
    const { tag, color } = this.props
    const style = {
      borderColor: color,
      color
    }

    return <span className={styles.span} style={style}>
        { `@${tag}` }
    </span>
  }
}

export default Tag