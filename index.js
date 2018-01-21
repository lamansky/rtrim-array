'use strict'

const PossibleFunction = require('possible-function')

module.exports = function rtrimArray (arr, toTrim) {
  const shouldTrim = PossibleFunction(toTrim, Array.isArray(toTrim) ? el => toTrim.includes(el) : el => el === toTrim)
  let i
  for (i = arr.length - 1; i >= 0; i--) if (!shouldTrim(arr[i])) break
  return Array.from(arr).slice(0, i + 1)
}
