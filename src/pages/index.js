import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <div>
      <h1>5.12</h1>
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

    <h1>20.110</h1>
    <ul>
      <li>
        <Link to="/20.110/all">
          all 20.110 notes
        </Link>
      </li>
    </ul>
    
    <h1>17.395</h1>
    <ul>
      <li>
        <Link to="/17.395/all">
          all 17.395 notes
        </Link>
      </li>
    </ul>

    <h1>5.07</h1>
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
  </>
)

export default IndexPage
