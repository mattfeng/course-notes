import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/notes.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <div>
      <h1>talks</h1>
      <ul>
        <li>
          <Link to="/talks/withinsight">with/in/sight</Link>
        </li>
      </ul>

      <h1>software development</h1>
      <ul>
        <li>
          <Link to="/dev">index</Link>
        </li>
      </ul>

      <h1>bioinformatics</h1>
      <ul>
        <li>
          <Link to="/stat115">
            STAT115: Introduction to Computational Biology and Bioinformatics
          </Link>
        </li>
      </ul>

      <h1>deep learning</h1>
      <ul>
        <li>
          <Link to="/cs224w">CS224W: Machine Learning for Graphs</Link>
        </li>
      </ul>

      <h1>classes</h1>
      <Link to="/questions">
        <h2>questions</h2>
      </Link>

      <br />

      <Link to="/5.12">
        <h2>5.12 organic chemistry 1</h2>
      </Link>
      <ul>
        <li>
          <Link to="/5.12/unit1">
            unit 1 (1 &ndash; 10): structure, energy, and reactivity
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit2">
            unit 2 (11 &ndash; 18): chemistry of alkenes and alkynes
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit3">
            unit 3 (19 &ndash; 23): substitution and elimination reactions
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit4">
            unit 4 (24 &ndash; 30): chemistry of the carbonyl group
          </Link>
        </li>
        <li>
          <Link to="/5.12/unit5">
            unit 5 (31 &ndash; 33): chemistry of aromatic compounds
          </Link>
        </li>
        <li>
          <Link to="/5.12/rxns">full list of reactions</Link>
        </li>
        <li>
          <Link to="/5.12/glossary">glossary</Link>
        </li>
      </ul>
    </div>

    <h2>20.110 thermodynamics of biomolecular systems</h2>
    <ul>
      <li>
        <Link to="/20.110">part 1: physical chemistry of the biosciences</Link>
      </li>
      <li>
        <Link to="/20.110/statmech">part 2: statistical mechanics</Link>
      </li>
      <li>
        <Link to="/20.110/review">review (cheat sheet)</Link>
      </li>
    </ul>

    <h2>17.395 innovation systems</h2>
    <ul>
      <li>
        <Link to="/17.395">all 17.395 notes</Link>
      </li>
      <li>
        <Link to="/17.395/class5">
          class 5: organization of innovation systems at the face-to-face level
        </Link>
      </li>
      <li>
        <Link to="/17.395/class6">class 6: DARPA</Link>
      </li>
      <li>
        <Link to="/17.395/class7">class 7: ARPA-E</Link>
      </li>
      <li>
        <Link to="/17.395/class8">class 8: advanced manufacturing</Link>
      </li>
      <li>
        <Link to="/17.395/class7onepager">class 7 one pager</Link>
      </li>
      <li>
        <Link to="/17.395/class8onepager">class 8 one pager</Link>
      </li>
    </ul>

    <h2>5.07 biochemistry 1</h2>
    <ul>
      <li>
        <Link to="/5.07/unit1">unit 1: structure of the elements of life</Link>
      </li>
      <li>
        <Link to="/5.07/unit2">unit 2: enzymes and catalysis</Link>
      </li>
    </ul>

    <h2>21A.501 art, craft, and science</h2>
    <ul>
      <li>
        <Link to="/21A.501/lec5">lecture 5: knowledge</Link>
      </li>
      <li>
        <Link to="/21A.501/lec6">lecture 6: learning</Link>
      </li>
      <li>
        <Link to="/21A.501/memo1">memo 1</Link>
      </li>
      <li>
        <Link to="/21A.501/memo2">memo 2</Link>
      </li>
      <li>
        <Link to="/21A.501/lec6">lec 6: learning</Link>
      </li>
    </ul>

    <h2>15.401 finance theory 1</h2>
    <ul>
      <li>
        <Link to="/15.401/notes">all 15.401 notes</Link>
      </li>
    </ul>

    <h2>7.23 immunology</h2>
    <ul>
      <li>
        <Link to="/7.23">all 7.23 notes</Link>
      </li>
    </ul>

    <h2>20.465 engn the immune sysm in cancer and beyond</h2>
    <ul>
      <li>
        <Link to="/20.465">all 20.465 notes</Link>
      </li>
    </ul>

    <h1>building</h1>
    <ul>
      <li>
        <Link to="/building">how to build</Link>
      </li>
    </ul>

    <h1>startups</h1>
    <ul>
      <li>
        <Link to="/startup/pitch">how to give a strong pitch</Link>
      </li>
    </ul>

    <h1>deep learning</h1>
    <ul>
      <li>
        <Link to="/deep/questions">questions</Link>
      </li>

      <li>
        <Link to="/deep/pytorch">pytorch</Link>
      </li>

      <li>
        basics
        <ul>
          <li>
            <Link to="/deep/basics/ae">autoencoders</Link>
          </li>
          <li>
            <Link to="/deep/basics/prob">probability</Link>
          </li>
          <li>
            <Link to="/deep/basics/colab">google colab</Link>
          </li>
        </ul>
      </li>

      <li>
        bio
        <ul>
          <li>
            <Link to="/deep/bio/alphafold">alphafold</Link>
          </li>
          <li>
            <Link to="/deep/bio/antibody">antibody design</Link>
          </li>
        </ul>
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
