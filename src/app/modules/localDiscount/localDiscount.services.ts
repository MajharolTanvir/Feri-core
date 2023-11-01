/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'

const createLocalDiscount = async (discountData: any) => {
  const { products, ...data } = discountData
  const result = await prisma.localDiscount.create({
    data,
    include: {
      PromoCodeWithProduct: {
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
      PromoCodeWithProduct: {
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
      PromoCodeWithProduct: {
        include: {
          product: true,
        },
      },
    },
  })
}

const deleteLocalDiscount = async (id: string) => {
  const isDiscount = await prisma.localDiscount.findFirst({
    where: { id },
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
