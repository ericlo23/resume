module.exports = {
  siteMetadata: {
    title: `Resume - Eric Lo`,
    description: `Eric Lo, Front-end and mobile developer, Taipei, Taiwan, +886 978878323, eric.lo.7823@gmail.com`,
    author: `eric.lo.7823@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/resume"
}
