import { Category } from '@prisma/client'
import prisma from '../../../shared/prisma'

const addCategory = async (categoryData: Category) => {
  const category = await prisma.category.create({
    data: categoryData,
  })
  return category
}

const getAllCategory = async () => {
  const categories = await prisma.category.findMany({})
  return categories
}

const editCategory = async (categoryData: Partial<Category>, id: string) => {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data: categoryData,
  })
  return category
}

const deleteCategory = async (id: string) => {
  const category = await prisma.category.delete({ where: { id } })
  return category
}

export const CategoryService = {
  addCategory,
  getAllCategory,
  editCategory,
  deleteCategory,
}
