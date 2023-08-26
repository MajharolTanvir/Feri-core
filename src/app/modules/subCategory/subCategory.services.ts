import { SubCategory } from "@prisma/client"
import prisma from "../../../shared/prisma"


const addSubCategory = async (categoryData: SubCategory) => {
  const subCategory = (await prisma.subCategory.create({ data: categoryData }))
  return subCategory
}

const getAllSubCategory = async () => {
  const categories = await prisma.subCategory.findMany({})
  return categories
}

const editSubCategory = async (categoryData: Partial<SubCategory>, id: string) => {
  const subCategory = await prisma.subCategory.update({
    where: { id },
    data: categoryData,
    include: {
      category: true
    }
  },
  )
  return subCategory
}

const deleteSubCategory = async (id: string) => {
  const subCategory = await prisma.subCategory.delete({ where: { id } })
  return subCategory
}

export const SubCategoryService = {
  addSubCategory,
  getAllSubCategory,
  editSubCategory,
  deleteSubCategory,
}
