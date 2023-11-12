import { z } from 'zod'

const signupZodSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'First name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    token: z.string().optional(),
  }),
})

const signInZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
})

const userProfileZodSchema = z.object({
  body: z.object({
    contactNo: z.string({
      required_error: 'Contact no is required',
    }),
    presentAddress: z.string({
      required_error: 'Present address is required',
    }),
    profileImage: z.string({
      required_error: 'Profile image url is required',
    }),
    shopName: z.string().optional(),
    shopContactNo: z.string().optional(),
    country: z.string().optional(),
    division: z.string().optional(),
    district: z.string().optional(),
    area: z.string().optional(),
    nidNumber: z.string().optional(),
    treadLicenseNo: z.string().optional(),
  }),
})

export const UsersValidation = {
  signupZodSchema,
  signInZodSchema,
  userProfileZodSchema,
}
