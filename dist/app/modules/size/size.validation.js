'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.SizeValidation = void 0
const zod_1 = require('zod')
const createSizeZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.number({
      required_error: 'Size name is required',
    }),
  }),
})
const updateSizeZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.number({
      required_error: 'Size name is required',
    }),
  }),
})
exports.SizeValidation = {
  createSizeZodSchema,
  updateSizeZodSchema,
}
