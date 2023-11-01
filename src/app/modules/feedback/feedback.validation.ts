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

export const FeedbackValidation = {
  createFeedback,
}
