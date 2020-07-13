module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
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
  },
  babel:{
    "plugins": [
      [
        "styled-jsx/babel",
        { "plugins": ["styled-jsx-plugin-sass"] }
      ]
    ]
  }
}
