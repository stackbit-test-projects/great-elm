module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Blazed Labs LLC",
    domain: "https://blazed.work",
    defaultTitle:
      "Blazed Labs LLC - Engineering and Product Development Divison",
    preamble:
      "We're the engineering and product development divison of Blazed Labs LLC.",
    defaultDescription: "We make fast websites.",
    postamble: "Think we can work together? We'd love to hear from you:",
    contact: {
      email: "hello@blazed.work",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-material-ui",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Blazed Work Site",
        short_name: "blz-work",
        start_url: "/",
        background_color: "#C1CAD6",
        //theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        //crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
