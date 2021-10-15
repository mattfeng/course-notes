import React, { Component } from "react"

import * as styles from "../styles/tag.module.scss"

class Tag extends Component {
  render() {
    const { tag } = this.props

    return <span className={styles.span}>
        { `@${tag}` }
    </span>
  }
}

export default Tag