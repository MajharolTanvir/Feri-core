import { z } from 'zod'

const createReview = z.object({
  body: z.object({
    productId: z.string({
      required_error: 'Product id is required',
    }),
    reviewData: z.string({
      required_error: 'Review data is required',
    }),
    rating: z.number({
      required_error: 'Rating is required',
    }),
  }),
})

const updateReview = z.object({
  body: z.object({
    productId: z.string().optional(),
    reviewData: z.string().optional(),
    rating: z.number().optional(),
  }),
})

export const ReviewValidation = {
  createReview,
  updateReview,
}
