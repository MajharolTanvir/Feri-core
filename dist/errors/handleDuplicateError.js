'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const handleDuplicateError = error => {
  const errors = [
    {
      path: '',
      message: error.message,
    },
  ]
  const statusCode = 400
  let duplicateValue = null
  if (error.keyValue) {
    duplicateValue = Object.keys(error.keyPattern)
  }
  return {
    statusCode,
    message: `${duplicateValue} is already in use`,
    errorMessages: errors,
  }
}
exports.default = handleDuplicateError
