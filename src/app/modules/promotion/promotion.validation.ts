import { z } from 'zod'

const createPromotion = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    productId: z.string({
      required_error: 'Product id is required',
    }),
  }),
})

const updatePromotion = z.object({
  body: z.object({
    title: z.string().optional(),
    productId: z.string().optional(),
  }),
})

export const PromotionValidation = {
  createPromotion,
  updatePromotion,
}
