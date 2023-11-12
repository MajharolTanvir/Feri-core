import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { ProfileService } from './profile.services'
import { JwtPayload } from 'jsonwebtoken'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { userFilterAbleField } from './profile.constant'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const profileUpdate = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload

  const result = await ProfileService.profileUpdate(user.userId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  })
})

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload

  const result = await ProfileService.getProfile(user.userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  })
})

const getSingleProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.getSingleProfile(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  })
})

const getAllProfile = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterAbleField)
  const options = pick(req.query, paginationFields)
  const result = await ProfileService.getAllProfile(filters, options)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

const changeRole = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.changeRole(req.params.id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Role updated successfully',
    data: result,
  })
})

export const ProfileController = {
  profileUpdate,
  getProfile,
  getSingleProfile,
  getAllProfile,
  changeRole,
}
