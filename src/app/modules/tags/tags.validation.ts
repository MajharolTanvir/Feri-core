import { z } from 'zod'

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
})

export const TagsValidation = {
  create,
}
