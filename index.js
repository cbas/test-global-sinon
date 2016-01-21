require('isomorphic-fetch')

function download (url) {
  return global.fetch(url)
}

module.exports = download
