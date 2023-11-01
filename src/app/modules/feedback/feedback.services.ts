import { Feedback } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createFeedback = async (userId: string, data: Feedback) => {
  data.userId = userId
  return await prisma.feedback.create({
    data,
  })
}

const allFeedback = async () => {
  return await prisma.feedback.findMany({
    include: {
      user: true,
    },
  })
}

const singleFeedback = async (id: string) => {
  return await prisma.feedback.findFirst({
    where: {
      id,
    },
    include: {
      user: true,
    },
  })
}

const deleteFeedback = async (id: string, userId: string) => {
  return await prisma.feedback.delete({
    where: {
      id,
      userId: userId,
    },
  })
}

export const FeedbackServices = {
  createFeedback,
  allFeedback,
  singleFeedback,
  deleteFeedback,
}
