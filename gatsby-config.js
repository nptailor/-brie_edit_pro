module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `auberdemo`,
        accessToken: `MC5YdFk4cFJBQUFCMEFLVHhX.J--_vXDvv70O77-9fXkDPe-_vQ7vv73vv71wOW9z77-9EFbvv71G77-977-9Ge-_ve-_vUI5AO-_vQ`,
        pages:[{
          type:`Page`,
          match: `/:uid`,
          path:`/`,
          component: require.resolve('./src/templates/page.js')
        }]
      },
    },
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
