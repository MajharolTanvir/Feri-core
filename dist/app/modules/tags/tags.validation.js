'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TagsValidation = void 0
const zod_1 = require('zod')
const create = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string({
      required_error: 'Name is required',
    }),
  }),
})
exports.TagsValidation = {
  create,
}
