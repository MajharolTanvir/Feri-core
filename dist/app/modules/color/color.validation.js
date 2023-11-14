'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ColorValidation = void 0
const zod_1 = require('zod')
const createColorZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string({
      required_error: 'Color name is required',
    }),
    hexCode: zod_1.z.string({
      required_error: 'Color code is required',
    }),
  }),
})
const updateColorZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z
      .string({
        required_error: 'Color name is required',
      })
      .optional(),
    hexCode: zod_1.z
      .string({
        required_error: 'Color code is required',
      })
      .optional(),
  }),
})
exports.ColorValidation = {
  createColorZodSchema,
  updateColorZodSchema,
}
