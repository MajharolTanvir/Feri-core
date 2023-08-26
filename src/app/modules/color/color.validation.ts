import { z } from 'zod'

const createColorZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Color name is required',
        }),
        hexCode: z.string({
            required_error: 'Color code is required',
        }),
    }),
})

const updateColorZodSchema = z.object({
    body: z.object({
        name: z
            .string({
                required_error: 'Color name is required',
            })
            .optional(),
        hexCode: z
            .string({
                required_error: 'Color code is required',
            })
            .optional(),
    }),
})



export const ColorValidation = {
    createColorZodSchema,
    updateColorZodSchema
}