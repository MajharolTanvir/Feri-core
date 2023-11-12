import { z } from 'zod'

const profileUpdateZodValidation = z.object({
  body: z.object({
    userId: z.string().optional(),
    bio: z.string().optional(),
    country: z.string().optional(),
    division: z.string().optional(),
    district: z.string().optional(),
    area: z.string().optional(),
    nid: z.string().optional(),
    passport: z.string().optional(),
    profileImage: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
  }),
})

export const ProfileValidation = {
  profileUpdateZodValidation,
}
