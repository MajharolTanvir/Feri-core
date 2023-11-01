import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { ReviewServices } from './review.services'
import { Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'

const createReview = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await ReviewServices.createReview(req.body, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  })
})

const getReview = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.getReview()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully',
    data: result,
  })
})

const updateReview = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await ReviewServices.updateReview(
    req.params.id,
    userId,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review delete successfully',
    data: result,
  })
})

const createComment = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.createComment(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review replay added successfully',
    data: result,
  })
})

export const ReviewController = {
  createComment,
  createReview,
  getReview,
  updateReview,
}
