import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { SizeService } from "./size.services"
import httpStatus from "http-status"


const addSize = catchAsync(async (req: Request, res: Response) => {
    const sizeData = req.body
    const result = await SizeService.addSize(sizeData)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Size added successfully',
        data: result,
    })
})

const getSizes = catchAsync(async (req: Request, res: Response) => {
    const result = await SizeService.getSizes()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All sizes retrieved successfully',
        data: result,
    })
})

const editSize = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const sizeData = req.body.name
    const result = await SizeService.editSize(sizeData, id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Size edited successfully',
        data: result,
    })
})

const deleteSize = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await SizeService.deleteSize(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Size deleted successfully',
        data: result,
    })
})


export const SizeController = {
    addSize,
    getSizes,
    editSize,
    deleteSize
}