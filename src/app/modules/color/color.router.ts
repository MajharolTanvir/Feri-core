import express from 'express'
import { ColorController } from './color.controller'
import validateRequest from '../../middleware/validateRequest'
import { ColorValidation } from './color.validation'


const router = express.Router()

//* Color routes

router.patch(
    '/edit-color/:id',
    validateRequest(ColorValidation.updateColorZodSchema),
    ColorController.editColor,
)

router.get('/get-color', ColorController.getColors)

router.delete('/delete-color/:id', ColorController.deleteColor)

router.post(
    '/add-color',
    validateRequest(ColorValidation.createColorZodSchema),
    ColorController.addColor,
)


export const ColorRouter = router;