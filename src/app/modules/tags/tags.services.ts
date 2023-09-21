import { Tags } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createTags = async (tagsData: Tags): Promise<Tags> => {
  const result = await prisma.tags.create({
    data: tagsData,
  })
  return result
}

const getAllTags = async (): Promise<Tags[]> => {
  const result = await prisma.tags.findMany()
  return result
}

const updateTags = async (
  id: string,
  updateData: Partial<Tags>,
): Promise<Tags | null> => {
  const result = await prisma.tags.update({
    where: {
      id,
    },
    data: updateData,
  })
  return result
}

const deleteTags = async (id: string): Promise<Tags> => {
  const result = await prisma.tags.delete({
    where: {
      id,
    },
  })
  return result
}

export const TagsService = {
  createTags,
  getAllTags,
  updateTags,
  deleteTags,
}
