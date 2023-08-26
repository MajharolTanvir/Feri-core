/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose'

export type ProductsType = {
  name: string
  image: string[]
  description: string
  brand: string
  tags: string[]
  review: number
  seller: Schema.Types.ObjectId
  categories: string[]
  quantity: number
  color?: Schema.Types.ObjectId[]
  size?: Schema.Types.ObjectId[]
  weight?: Schema.Types.ObjectId[]
  inStoke: number
  price: number
  delivery: {
    freeShipping?: {
      location: string
      Charge: string
      shippingDate: string
    }
    paidShipping: {
      shippingCharge: number
      shippingDate: string
    }
  }
  display: 'Show' | 'Hidden'
}

export type ProductsModel = Model<ProductsType, Record<string, unknown>>
