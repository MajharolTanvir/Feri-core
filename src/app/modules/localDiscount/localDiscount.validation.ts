import { z } from 'zod'

const createLocalDiscount = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    percentage: z.number({
      required_error: 'Percentage is required',
    }),
    promoCode: z.string({
      required_error: 'Promo code is required',
    }),
  }),
})

export const LocalDiscountValidation = {
  createLocalDiscount,
}
