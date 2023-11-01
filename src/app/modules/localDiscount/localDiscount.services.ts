/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'

const createLocalDiscount = async (discountData: any, userId: string) => {
  const { products, ...data } = discountData
  data.sellerId = userId
  const result = await prisma.localDiscount.create({
    data,
    include: {
      promoCodeWithProduct: {
        include: {
          product: true,
        },
      },
    },
  })

  products.map(
    async (product: string) =>
      await prisma.promoCodeWithProduct.create({
        data: {
          localDiscountId: result.id,
          productId: product,
        },
      }),
  )

  return result
}

const allLocalDiscount = async () => {
  return await prisma.localDiscount.findMany({
    include: {
      promoCodeWithProduct: {
        include: {
          product: true,
        },
      },
    },
  })
}

const singleLocalDiscount = async (id: string) => {
  return await prisma.localDiscount.findFirst({
    where: {
      id,
    },
    include: {
      promoCodeWithProduct: {
        include: {
          product: true,
        },
      },
    },
  })
}

const deleteLocalDiscount = async (id: string, userId: string) => {
  const isDiscount = await prisma.localDiscount.findFirst({
    where: { id, sellerId: userId },
  })

  await prisma.promoCodeWithProduct.deleteMany({
    where: {
      localDiscountId: isDiscount?.id,
    },
  })

  return await prisma.localDiscount.delete({
    where: {
      id: isDiscount?.id,
    },
  })
}

export const LocalDiscountServices = {
  createLocalDiscount,
  allLocalDiscount,
  singleLocalDiscount,
  deleteLocalDiscount,
}
