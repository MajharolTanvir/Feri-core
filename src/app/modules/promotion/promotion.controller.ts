import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { PromotionServices } from './promotion.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createPromotion = catchAsync(async (req: Request, res: Response) => {
  const result = await PromotionServices.createPromotion(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Promotion created successfully!',
    data: result,
  })
})

const allPromotion = catchAsync(async (req: Request, res: Response) => {
  const result = await PromotionServices.allPromotion()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Promotions retrieved successfully!',
    data: result,
  })
})

const singlePromotion = catchAsync(async (req: Request, res: Response) => {
  const result = await PromotionServices.singlePromotion(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Promotion retrieved successfully!',
    data: result,
  })
})

const updatePromotion = catchAsync(async (req: Request, res: Response) => {
  const result = await PromotionServices.updatePromotion(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Promotion updated successfully!',
    data: result,
  })
})

const deletePromotion = catchAsync(async (req: Request, res: Response) => {
  const result = await PromotionServices.deletePromotion(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Promotion deleted successfully!',
    data: result,
  })
})

export const PromotionController = {
  createPromotion,
  allPromotion,
  singlePromotion,
  updatePromotion,
  deletePromotion,
}
