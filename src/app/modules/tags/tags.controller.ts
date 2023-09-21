import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { TagsService } from './tags.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createTags = catchAsync(async (req: Request, res: Response) => {
  const result = await TagsService.createTags(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tags created successfully',
    data: result,
  })
})

const getAllTags = catchAsync(async (req: Request, res: Response) => {
  const result = await TagsService.getAllTags()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tags retrieved successfully',
    data: result,
  })
})

const updateTags = catchAsync(async (req: Request, res: Response) => {
  const result = await TagsService.updateTags(req.params.id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tags updated successfully',
    data: result,
  })
})

const deleteTags = catchAsync(async (req: Request, res: Response) => {
  const result = await TagsService.deleteTags(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tags deleted successfully',
    data: result,
  })
})

export const TagsController = {
  createTags,
  getAllTags,
  updateTags,
  deleteTags,
}
