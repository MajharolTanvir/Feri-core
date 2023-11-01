import { Blog } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createBlog = async (userId: string, data: Blog) => {
  data.userId = userId
  return await prisma.blog.create({
    data,
  })
}

const allBlog = async () => {
  return await prisma.blog.findMany()
}

const singleBlog = async (id: string) => {
  return await prisma.blog.findFirst({
    where: {
      id,
    },
  })
}

const updateBlog = async (id: string, userId: string, data: Partial<Blog>) => {
  return await prisma.blog.update({
    where: {
      id,
      userId: userId,
    },
    data,
  })
}

const deleteBlog = async (id: string, userId: string) => {
  return await prisma.blog.delete({
    where: {
      id,
      userId: userId,
    },
  })
}

export const BlogServices = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
}
