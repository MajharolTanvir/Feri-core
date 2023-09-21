/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { ProductService } from './products.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user
  const result = await ProductService.createProduct(user.userEmail, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create successfully',
    data: result,
  })
})

export const ProductController = {
  createProduct,
}
