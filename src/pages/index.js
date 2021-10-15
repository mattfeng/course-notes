import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/notes.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>

    <div>
      <h1>classes</h1>
      <Link to="/questions">
        <h2>questions</h2>
      </Link>

      <h2>5.12 organic chemistry 1</h2>
      <ul>
        <li>
          <Link to="/5.12/unit1">
            unit 1 (l1 - l10): structure, energy, and reactivity
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit2">
            unit 2 (l11 - l18): chemistry of alkenes and alkynes
          </Link>
        </li>
      </ul>
    </div>

    <h2>20.110 thermodynamics of biomolecular systems</h2>
    <ul>
      <li>
        <Link to="/20.110">
          all 20.110 notes
        </Link>
      </li>
    </ul>
    
    <h2>17.395 innovation systems</h2>
    <ul>
      <li>
        <Link to="/17.395/all">
          all 17.395 notes
        </Link>
      </li>
    </ul>

    <h2>5.07 biochemistry 1</h2>
    <ul>
      <li>
        <Link to="/5.07/unit1">
          unit 1: structure of the elements of life
        </Link>
      </li>
      <li>
        <Link to="/5.07/unit2">
          unit 2: enzymes and catalysis
        </Link>
      </li>
    </ul>

    <h2>21A.501 art, craft, and science</h2>
    <ul>
      <li>
        <Link to="/21A.501/readings5">
          readings 5
        </Link>
      </li>
    </ul>

    <h2>7.23 immunology</h2>
    <ul>
      <li>
        <Link to="/7.23">
          all 7.23 notes
        </Link>
      </li>
    </ul>
    
    <h1>building</h1>
    <ul>
      <li>
        <Link to="/building">
          how to build
        </Link>
      </li>
    </ul>

    <div>
      <h1>references</h1>
      <ul>
        <li>
          <Link to="/ref/latex">latex</Link>
        </li>
        <li>
          <Link to="/ref/gatsby">gatsby</Link>
        </li>
        <li>
          <Link to="/ref/notes">notetaking</Link>
        </li>
        <li>
          <Link to="/ref/macos">macos</Link>
        </li>
        <li>
          <Link to="/ref/abrv">abbreviations</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default IndexPage
