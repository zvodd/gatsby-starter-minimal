require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Example Gatsby Cart`,
    description: `Carts Carts Carts`,
    author: `zvodd`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({
            stage: 0
          })
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-source-stripe-custom",
  ],
}
