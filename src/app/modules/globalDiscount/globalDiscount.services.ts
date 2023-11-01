import { globalDiscount } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createGlobalDiscount = async (data: globalDiscount) => {
  return await prisma.globalDiscount.create({
    data,
  })
}

const allGlobalDiscount = async () => {
  return await prisma.globalDiscount.findMany({})
}

const singleGlobalDiscount = async (id: string) => {
  return await prisma.globalDiscount.findFirst({
    where: {
      id,
    },
  })
}

const updateGlobalDiscount = async (
  id: string,
  data: Partial<globalDiscount>,
) => {
  return await prisma.globalDiscount.update({
    where: {
      id,
    },
    data,
  })
}

const deleteGlobalDiscount = async (id: string) => {
  return await prisma.globalDiscount.delete({
    where: {
      id,
    },
  })
}

export const GlobalDiscountServices = {
  createGlobalDiscount,
  allGlobalDiscount,
  singleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount,
}
