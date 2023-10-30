import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { AddToCartServices } from './addToCart.services'

const createAddToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await AddToCartServices.createAddToCart(req.body.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add to cart added successfully',
    data: result,
  })
})

const getAddToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await AddToCartServices.getAddToCart()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add to cart retrieved successfully',
    data: result,
  })
})

const deleteAddToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await AddToCartServices.deleteAddToCart(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add to cart delete successfully',
    data: result,
  })
})

export const AddToCartController = {
  createAddToCart,
  getAddToCart,
  deleteAddToCart,
}
