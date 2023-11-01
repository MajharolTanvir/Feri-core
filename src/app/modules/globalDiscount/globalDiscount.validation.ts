import { z } from 'zod'

const createGlobalDiscount = z.object({
  body: z.object({
    thumbnail: z.string({
      required_error: 'Thumbnail is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),
    promocode: z.string({
      required_error: 'Promo code is required',
    }),
    percentage: z.number({
      required_error: 'Percentage is required',
    }),
  }),
})

const updateGlobalDiscount = z.object({
  body: z.object({
    thumbnail: z.string().optional(),
    title: z.string().optional(),
    promocode: z.string().optional(),
    percentage: z.number().optional(),
  }),
})

export const GlobalDiscountValidation = {
  createGlobalDiscount,
  updateGlobalDiscount,
}
