import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

require("katex/dist/katex.min.css")
require(`katex/contrib/mhchem/mhchem.js`)

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <div>
      <h1>{ post.frontmatter.title }</h1>
      <MDXRenderer>
        { post.body }
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`