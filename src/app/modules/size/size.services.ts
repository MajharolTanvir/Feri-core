import { Size } from '@prisma/client'
import prisma from '../../../shared/prisma'

const addSize = async (sizeData: Size) => {
  const size = await prisma.size.create({ data: sizeData })
  return size
}

const getSizes = async () => {
  const sizes = await prisma.size.findMany({})
  return sizes
}

const editSize = async (sizeData: Partial<Size>, id: string) => {
  const size = await prisma.size.update({ where: { id }, data: sizeData })
  return size
}

const deleteSize = async (id: string) => {
  const size = await prisma.size.delete({ where: { id } })
  return size
}

export const SizeService = {
  addSize,
  getSizes,
  editSize,
  deleteSize,
}
