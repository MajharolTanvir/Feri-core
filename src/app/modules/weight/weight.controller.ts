import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { WeightService } from './weight.services'

//* Weight controller
const addWeight = catchAsync(async (req: Request, res: Response) => {
  const weightData = req.body
  const result = await WeightService.addWeight(weightData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Weight added successfully',
    data: result,
  })
})

const getWeights = catchAsync(async (req: Request, res: Response) => {
  const result = await WeightService.getWeights()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All weights retrieved successfully',
    data: result,
  })
})

const editWeight = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await WeightService.editWeight(req.body, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Weight edited successfully',
    data: result,
  })
})

const deleteWeight = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await WeightService.deleteWeight(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Weight deleted successfully',
    data: result,
  })
})

export const WeightController = {
  addWeight,
  getWeights,
  editWeight,
  deleteWeight,
}
