import { z } from 'zod'

const createFeedback = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
  }),
})

const updateFeedback = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
})

export const FeedbackValidation = {
  createFeedback,
  updateFeedback,
}
