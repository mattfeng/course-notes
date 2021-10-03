import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <div>
      <h1>5.12</h1>
      <ul>
        <li>
          <Link to="/5.12/unit1">
            Unit 1 (L1 - L10): Structure, Energy, and Reactivity
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit2">
            Unit 2 (L11 - L18): Chemistry of Alkenes and Alkynes
          </Link>
        </li>
      </ul>
    </div>

    <h1>20.110</h1>
    <ul>
      <li>
        <Link to="/20.110/all">
          All 20.110 Notes
        </Link>
      </li>
    </ul>

    <h1>5.07</h1>
    <ul>
      <li>
        <Link to="/5.07/unit1">
          Unit 1: Structure of the Elements of Life
        </Link>
      </li>
      <li>
        <Link to="/5.07/unit2">
          Unit 2: Enzymes and Catalysis
        </Link>
      </li>
    </ul>

    <div>
      <h1>references</h1>
      <ul>
        <li>
          <Link to="/ref/latex">LaTeX</Link>
        </li>
        <li>
          <Link to="/ref/gatsby">Gatsby</Link>
        </li>
      </ul>
    </div>
  </>
)

export default IndexPage
