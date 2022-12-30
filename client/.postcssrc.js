// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	test: /\.css$/,
	loader: 'style-loader!css-loader',
	exclude: /node_modules/,
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
