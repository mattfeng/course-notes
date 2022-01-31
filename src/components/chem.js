import React, { Component } from "react"
import katex from "katex"
import * as styles from "../styles/chem.module.scss"

require("katex/dist/contrib/mhchem.js")

class Chem extends Component {
  render() {
    const { chem, block } = this.props
    const s = katex.renderToString(chem, {
      throwOnError: false,
      displayMode: block,
      macros: {
        "\\Cel": "\\degree\\mathrm{C}",
        "\\Keq": "\\text{K}_{eq}",
        "\\DG": "\\Delta G",
        "\\DH": "\\Delta H",
        "\\DS": "\\Delta S",
        // chemistry
        "\\PH": "\\mathrm{pH}",
        "\\p": "\\mathrm{p}#1",
      },
    })

    if (block) {
      return (
        <div
          className={styles.block}
          dangerouslySetInnerHTML={{ __html: s }}
        ></div>
      )
    }

    return <span dangerouslySetInnerHTML={{ __html: s }}></span>
  }
}

export default Chem
