const _ = require("lodash")

module.exports = {
  pathPrefix: "/course-notes",
  siteMetadata: {
    title: ``,
    description: ``,
    author: `@mattfeng`,
    siteUrl: `https://mattfeng.tech/course-notes`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: `solarized-light`,
            }
          },
        ],
        remarkPlugins: [
          [
            require("remark-math"),
            {
              strict: `ignore`,
              macros: {
                "\\K#1": "\\text{K}_{#1}"
              }
            }
          ],
        ],
        rehypePlugins: [
          require(`rehype-katex`)
        ]
      }
    }
  ],
}