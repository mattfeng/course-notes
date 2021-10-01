module.exports = {
  pathPrefix: "course-notes/",
  siteMetadata: {
    title: ``,
    description: ``,
    author: `@mattfeng`,
    siteUrl: `https://mattfeng.tech/course-notes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`
        ],
        remarkPlugins: [
          [
            require(`remark-math`),
            {
              strict: `ignore`
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
