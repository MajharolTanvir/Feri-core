/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from '../../../shared/prisma'

const createProduct = async (userEmail: string, payload: any) => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      email: userEmail,
    },
  })

  console.log(isUserExist, payload)

  // const product = await prisma.product.create({
  //   data: productData
  // })
  // return product
}

export const ProductService = {
  createProduct,
}
