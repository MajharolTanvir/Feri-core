/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from '../../../shared/prisma'
import { ProductUtils } from './product.utils'

const createProduct = async (userId: string, payload: any) => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      syncId: userId,
    },
  })

  payload.product.sellerId = isUserExist?.id
  const createProducts = await prisma.$transaction(async transactionProduct => {
    const createProduct = await transactionProduct.product.create({
      data: payload.product,
    })

    await ProductUtils.createProductWithDetails(
      createProduct.id,
      payload,
      transactionProduct,
    )

    return await transactionProduct.product.findFirst({
      where: {
        id: createProduct.id,
      },
      include: {
        Image: true,
        ColorConnection: {
          include: {
            color: true,
          },
        },
        SizeConnection: {
          include: {
            size: true,
          },
        },
        WeightConnection: {
          include: {
            weight: true,
          },
        },
        TagsConnection: {
          include: {
            tags: true,
          },
        },
        subCategory: true,
        FreeDelivery: true,
        PaidDelivery: true,
      },
    })
  })

  return createProducts
}

export const ProductService = {
  createProduct,
}
