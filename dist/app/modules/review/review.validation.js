'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReviewValidation = void 0
const zod_1 = require('zod')
const createReview = zod_1.z.object({
  body: zod_1.z.object({
    productId: zod_1.z.string({
      required_error: 'Product id is required',
    }),
    reviewData: zod_1.z.string({
      required_error: 'Review data is required',
    }),
    rating: zod_1.z.number({
      required_error: 'Rating is required',
    }),
  }),
})
const updateReview = zod_1.z.object({
  body: zod_1.z.object({
    productId: zod_1.z.string().optional(),
    reviewData: zod_1.z.string().optional(),
    rating: zod_1.z.number().optional(),
  }),
})
exports.ReviewValidation = {
  createReview,
  updateReview,
}
