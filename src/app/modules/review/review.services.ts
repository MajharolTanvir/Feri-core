import { Comment, Review } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createReview = async (data: Review) => {
  return await prisma.review.create({
    data,
  })
}

const getReview = async () => {
  return await prisma.review.findMany({
    include: {
      buyer: true,
      product: true,
      Comment: true,
    },
  })
}

const updateReview = async (
  id: string,
  userId: string,
  data: Partial<Review>,
) => {
  return await prisma.review.update({
    where: {
      id,
      buyerId: userId,
    },
    data,
  })
}

const createComment = async (data: Comment) => {
  return await prisma.comment.create({
    data,
  })
}

export const ReviewServices = {
  createComment,
  createReview,
  getReview,
  updateReview,
}
