import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { GlobalDiscountServices } from './globalDiscount.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createGlobalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await GlobalDiscountServices.createGlobalDiscount(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global discount created successfully!',
    data: result,
  })
})

const allGlobalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await GlobalDiscountServices.allGlobalDiscount()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global discounts retrieved successfully!',
    data: result,
  })
})

const singleGlobalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await GlobalDiscountServices.singleGlobalDiscount(
    req.params.id,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global discount retrieved successfully!',
    data: result,
  })
})

const updateGlobalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await GlobalDiscountServices.updateGlobalDiscount(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global discount updated successfully!',
    data: result,
  })
})

const deleteGlobalDiscount = catchAsync(async (req: Request, res: Response) => {
  const result = await GlobalDiscountServices.deleteGlobalDiscount(
    req.params.id,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global discount deleted successfully!',
    data: result,
  })
})

export const GlobalDiscountController = {
  createGlobalDiscount,
  allGlobalDiscount,
  singleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount,
}
