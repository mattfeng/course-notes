import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Chem from "../components/chem"
import Tag from "../components/tag"
import Collapse from "../components/collapse"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import katex from "katex"

import "../styles/katex.css"
import "../styles/main.scss"
import * as styles from "../styles/notes.module.scss"

require("katex/dist/katex.min.css")
deckDeckGoHighlightElement()

const SN2 = () => {
  return (
    <span>
      S<sub>N</sub>2
    </span>
  )
}

const SN1 = () => {
  return (
    <span>
      S<sub>N</sub>1
    </span>
  )
}

const RA = () => {
  return <span>&rarr;</span>
}

const PKA = () => {
  const s = katex.renderToString("\\mathrm{p}K_a", {
    throwOnError: false,
    displayMode: false,
  })
  return <span dangerouslySetInnerHTML={{ __html: s }}></span>
}

const PKB = () => {
  const s = katex.renderToString("\\mathrm{p}K_b", {
    throwOnError: false,
    displayMode: false,
  })
  return <span dangerouslySetInnerHTML={{ __html: s }}></span>
}

const Reaction = () => {
  return <span className={styles.reaction}>&#x1F338;</span>
}

const NoMechanism = () => {
  return <span className={styles.nomech}>&#x26D4;</span>
}

const shortcodes = {
  C: Chem,
  T: Tag,
  Link,
  SI: StaticImage,
  SN1,
  SN2,
  RA,
  PKA,
  PKB,
  Collapse,
  Rxn: Reaction,
  Nmxn: NoMechanism,
}

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/mhchem.min.js"
        integrity="sha384-LIgAiYlGSAdpNC9+YDjDPF6JeS/RRIumtNo0CmyQERZ/+g0h9MbuYQwf/5pQ4Y4M"
        crossOrigin="anonymous"
      ></script>
      <div className={styles.mainContainer}>
        <h1>{post.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`
