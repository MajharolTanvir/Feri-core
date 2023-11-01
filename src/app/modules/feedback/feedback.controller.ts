import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import { FeedbackServices } from './feedback.services'

const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await FeedbackServices.createFeedback(userId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback created successfully!',
    data: result,
  })
})

const allFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.allFeedback()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback retrieved successfully!',
    data: result,
  })
})

const singleFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.singleFeedback(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback retrieved successfully!',
    data: result,
  })
})

const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await FeedbackServices.deleteFeedback(req.params.id, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback deleted successfully!',
    data: result,
  })
})

export const FeedbackController = {
  createFeedback,
  allFeedback,
  singleFeedback,
  deleteFeedback,
}
