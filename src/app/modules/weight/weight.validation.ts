import { z } from 'zod'

const createWeightZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Weight name is required',
    }),
  }),
})

const updateWeightZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Weight name is required',
    }),
  }),
})

export const CommonValidation = {
  createWeightZodSchema,
  updateWeightZodSchema,
}
