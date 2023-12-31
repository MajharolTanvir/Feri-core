import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { SubCategoryService } from './subCategory.services'

const addSubCategory = catchAsync(async (req: Request, res: Response) => {
  const categoryData = req.body
  const result = await SubCategoryService.addSubCategory(categoryData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub category added successfully',
    data: result,
  })
})

const getAllSubCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await SubCategoryService.getAllSubCategory()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All sub categories retrieved successfully',
    data: result,
  })
})

const editSubCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const categoryData = req.body
  const result = await SubCategoryService.editSubCategory(categoryData, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub category edited successfully',
    data: result,
  })
})

const deleteSubCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SubCategoryService.deleteSubCategory(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub category deleted successfully',
    data: result,
  })
})

export const SubCategoryController = {
  addSubCategory,
  getAllSubCategory,
  editSubCategory,
  deleteSubCategory,
}
