import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { LocalDiscountServices } from './localDiscount.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'

const createLocalDiscount = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await LocalDiscountServices.createLocalDiscount(
    req.body,
    userId,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Local discount created successfully!',
    data: result,
  })
})

const allLocalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await LocalDiscountServices.allLocalDiscount()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Local discounts retrieved successfully!',
    data: result,
  })
})

const singleLocalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await LocalDiscountServices.singleLocalDiscount(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Local discount retrieved successfully!',
    data: result,
  })
})

const deleteLocalDiscount = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload
  const result = await LocalDiscountServices.deleteLocalDiscount(
    req.params.id,
    userId,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Local discount deleted successfully!',
    data: result,
  })
})

export const LocalDiscountController = {
  createLocalDiscount,
  allLocalDiscount,
  singleLocalDiscount,
  deleteLocalDiscount,
}
