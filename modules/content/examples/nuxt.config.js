var nuxtContent = require('../index.js')

module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    nuxtContent
  ],
  content: {
    dirs: [
      ["/", { // Top level files (Default Behavior)
        isPost: false
      }],
      ["posts", { // Top Level Post-style Directory
        permalink: ":year/:slug",
        routePath: "/"
      }],
      ["posts/registered", { // Nested Registered Directory
        permalink: ":section/:slug",
        routePath: "/"
      }],
      ["projects", { // Top Level Non Post-Style Directiory
        permalink: ":section/:slug",
        routePath: "projects",
        isPost: false
      }]
    ]
  }
}
