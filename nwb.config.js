module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: false
  },
  webpack: {
    extra:{
      module: {
        rules: [{
          test: /\.md$/,
          use: [
            {
              loader: "raw-loader",
            }
          ]
        }]
      }
    }
  }
}
