'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.CommonValidation = void 0
const zod_1 = require('zod')
const createWeightZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string({
      required_error: 'Weight name is required',
    }),
  }),
})
const updateWeightZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string({
      required_error: 'Weight name is required',
    }),
  }),
})
exports.CommonValidation = {
  createWeightZodSchema,
  updateWeightZodSchema,
}
