import { z } from 'zod'

const createBooking = z.object({
  body: z.object({
    division: z.string({
      required_error: 'Division is required',
    }),
    district: z.string({
      required_error: 'District is required',
    }),
    upozila: z.string({
      required_error: 'Upozila is required',
    }),
    area: z.string({
      required_error: 'Area is required',
    }),
    contactNo: z.string({
      required_error: 'Contact no is required',
    }),
    emergencyContactNo: z.string({
      required_error: 'Emergency contact no is required',
    }),
    subTotal: z.number({
      required_error: 'SubTotal is required',
    }),
    totalPrice: z.number({
      required_error: 'Total price is required',
    }),
  }),
})

const updateBooking = z.object({
  body: z.object({
    division: z.string().optional(),
    district: z.string().optional(),
    upozila: z.string().optional(),
    area: z.string().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    subTotal: z.number().optional(),
    totalPrice: z.number().optional(),
  }),
})

export const BookingValidation = {
  createBooking,
  updateBooking,
}
