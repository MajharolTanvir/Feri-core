import { AddToCart } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createAddToCart = async (data: AddToCart) => {
  const addToCart = await prisma.addToCart.create({
    data,
  })

  return addToCart
}

const getAddToCart = async () => {
  const addToCart = await prisma.addToCart.findMany()

  return addToCart
}

const deleteAddToCart = async (id: string) => {
  const addToCart = await prisma.addToCart.delete({
    where: {
      id,
    },
  })

  return addToCart
}

export const AddToCartServices = {
  createAddToCart,
  getAddToCart,
  deleteAddToCart,
}
