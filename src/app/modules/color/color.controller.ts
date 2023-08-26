import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { ColorService } from "./color.services"
import { Request, Response } from "express"


const addColor = catchAsync(async (req: Request, res: Response) => {
    const result = await ColorService.addColor(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Color added successfully',
        data: result,
    })
})

const getColors = catchAsync(async (req: Request, res: Response) => {
    const result = await ColorService.getColors()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All colors retrieved successfully',
        data: result,
    })
})

const editColor = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const colorData = req.body.name
    const result = await ColorService.editColor(colorData, id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Color edited successfully',
        data: result,
    })
})

const deleteColor = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await ColorService.deleteColor(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Color deleted successfully',
        data: result,
    })
})


export const ColorController = {
    addColor,
    getColors,
    editColor,
    deleteColor
}