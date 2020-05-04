module.exports = {
  siteMetadata: {
    title: 'Training',
    title2: 'Studio',
    author: 'Arbona  !',
    menuLinks: [{
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'classes',
        link: '/classes'
      },
      {
        name: 'schedules',
        link: '/schedules'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ]
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-sharp',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass',

  ],
}