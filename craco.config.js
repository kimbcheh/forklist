const CracoLessPlugin = require('craco-less')

module.exports = {
 plugins: [
  {
   plugin: CracoLessPlugin,
   options: {
    lessLoaderOptions: {
     lessOptions: {
      modifyVars: {
       '@font-family':
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
      },
      javascriptEnabled: true,
     },
    },
   },
  },
 ],
}
