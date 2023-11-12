/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'
import { ProductUtils } from './product.utils'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { paginationHelpers } from '../../../shared/paginationHelper'
import {
  productRelationalFields,
  productRelationalFieldsMapper,
  productSearchableFields,
} from './products.constant'
import { Prisma } from '@prisma/client'
import { productFilterableFields } from './products.interface'

const createProduct = async (userId: string, payload: any) => {
  payload.product.sellerId = userId
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
        PromoCodeWithProduct: {
          include: {
            localDiscount: true,
          },
        },
      },
    })
  })

  return createProducts
}

const getAllProducts = async (
  filters: productFilterableFields,
  options: IPaginationOptions,
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options)
  const { searchTerm, ...filterData } = filters

  const andConditions = []
  if (searchTerm) {
    andConditions.push({
      OR: productSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (productRelationalFields.includes(key)) {
          return {
            [productRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          }
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          }
        }
      }),
    })
  }

  const whereCondition: Prisma.ProductWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}

  const result = await prisma.product.findMany({
    where: whereCondition,
    skip,
    take: limit,
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
      reviews: true,
      seller: true,
      PromoCodeWithProduct: {
        include: {
          localDiscount: true,
        },
      },
    },
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  })
  const total = await prisma.product.count()
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  }
}

const getSingleProduct = async (id: string) => {
  const result = await prisma.product.findFirst({
    where: {
      id,
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
      reviews: true,
      seller: true,
      PromoCodeWithProduct: {
        include: {
          localDiscount: true,
        },
      },
    },
  })
  return result
}

const updateProduct = async (id: string, userId: string, payload: any) => {
  const isExistProduct = await prisma.product.findFirst({
    where: {
      id,
      sellerId: userId,
    },
  })

  if (!isExistProduct) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product not found')
  }

  const result = await ProductUtils.updateProductWithDetails(
    isExistProduct,
    payload,
  )
  return result
}

const deleteProduct = async (id: string, userId: string) => {
  const result = await prisma.product.delete({
    where: {
      id,
      sellerId: userId,
    },
  })
  return result
}

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
