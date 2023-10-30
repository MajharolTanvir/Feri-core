import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { BookingServices } from './booking.services'
import httpStatus from 'http-status'

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBooking(req.body.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking added successfully',
    data: result,
  })
})

const getAddToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getBooking()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  })
})

const deleteAddToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.deleteBooking(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking delete successfully',
    data: result,
  })
})

export const BookingController = {
  createBooking,
  getAddToCart,
  deleteAddToCart,
}
