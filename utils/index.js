const scss2Json = require('scss-to-json')
/**
 *
 * @param {string} sassFile
 * @returns {JSON}
 */
const sass2tailwind = (sassFile) => {
  return JSON.parse(JSON.stringify(scss2Json(sassFile)).replace(/\$/g, ''))
}

module.exports = { sass2tailwind }
