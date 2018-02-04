'use strict'

const pfn = require('pfn')

module.exports = function rtrimArray (arr, toTrim) {
  const shouldTrim = pfn(toTrim, Array.isArray(toTrim) ? el => toTrim.includes(el) : el => el === toTrim)
  let i
  for (i = arr.length - 1; i >= 0; i--) if (!shouldTrim(arr[i])) break
  return Array.from(arr).slice(0, i + 1)
}
