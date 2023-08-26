import { z } from 'zod'


const createSizeZodSchema = z.object({
    body: z.object({
        name: z.number({
            required_error: 'Size name is required',
        }),
    }),
})

const updateSizeZodSchema = z.object({
    body: z.object({
        name: z.number({
            required_error: 'Size name is required',
        }),
    }),
})



export const SizeValidation = {
    createSizeZodSchema,
    updateSizeZodSchema
}