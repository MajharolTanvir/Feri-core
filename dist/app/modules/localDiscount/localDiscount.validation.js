'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.LocalDiscountValidation = void 0
const zod_1 = require('zod')
const createLocalDiscount = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Title is required',
    }),
    percentage: zod_1.z.number({
      required_error: 'Percentage is required',
    }),
    promoCode: zod_1.z.string({
      required_error: 'Promo code is required',
    }),
  }),
})
exports.LocalDiscountValidation = {
  createLocalDiscount,
}
