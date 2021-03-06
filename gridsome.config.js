// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Front-End Developers",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-58222334-1"
      }
    }
  ]
};
