/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { ProductService } from './products.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user
  const result = await ProductService.createProduct(user.userId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create successfully',
    data: result,
  })
})

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getSingleProduct(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  })
})

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user
  const result = await ProductService.updateProduct(
    req.params.id,
    user.userId,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user
  const result = await ProductService.deleteProduct(req.params.id, user.userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
}
