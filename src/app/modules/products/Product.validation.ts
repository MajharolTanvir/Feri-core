import { z } from 'zod'

const createProduct = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    brand: z.string({
      required_error: 'Brand is required',
    }),
    categoryId: z.string({
      required_error: 'Category id is required',
    }),
    subCategoryId: z.string({
      required_error: 'Sub category id is required',
    }),
    quantity: z.number({
      required_error: 'Quantity is required',
    }),
    mainPrice: z.number({
      required_error: 'Price is required',
    }),
    discountPercentage: z.number({
      required_error: 'Price discount percentage is required',
    }),
  }),
})

const updateProduct = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    categoryId: z.string().optional(),
    subCategoryId: z.string().optional(),
    quantity: z.number().optional(),
    mainPrice: z.number().optional(),
    discountPercentage: z.number().optional(),
  }),
})

export const ProductValidation = {
  createProduct,
  updateProduct,
}
