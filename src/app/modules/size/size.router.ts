import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { SizeController } from './size.controller'
import { SizeValidation } from './size.validation'
const router = express.Router()

router.patch(
  '/edit-size/:id',
  validateRequest(SizeValidation.updateSizeZodSchema),
  SizeController.editSize,
)

router.get('/get-sizes', SizeController.getSizes)

router.delete('/delete-size/:id', SizeController.deleteSize)

router.post(
  '/add-size',
  validateRequest(SizeValidation.createSizeZodSchema),
  SizeController.addSize,
)

export const SizesRouter = router
