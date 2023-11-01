import { Promotion } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createPromotion = async (data: Promotion) => {
  return await prisma.promotion.create({
    data,
  })
}

const allPromotion = async () => {
  return await prisma.promotion.findMany()
}

const singlePromotion = async (id: string) => {
  return await prisma.promotion.findFirst({
    where: {
      id,
    },
    include: {
      product: true,
    },
  })
}

const updatePromotion = async (id: string, data: Partial<Promotion>) => {
  return await prisma.promotion.update({
    where: {
      id,
    },
    data,
  })
}

const deletePromotion = async (id: string) => {
  return await prisma.promotion.delete({
    where: {
      id,
    },
  })
}

export const PromotionServices = {
  createPromotion,
  allPromotion,
  singlePromotion,
  updatePromotion,
  deletePromotion,
}
