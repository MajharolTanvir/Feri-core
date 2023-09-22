import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { SizeController } from './size.controller'
import { SizeValidation } from './size.validation'
const router = express.Router()

router.patch(
  '/:id',
  validateRequest(SizeValidation.updateSizeZodSchema),
  SizeController.editSize,
)

router.get('/', SizeController.getSizes)

router.delete('/:id', SizeController.deleteSize)

router.post(
  '/',
  validateRequest(SizeValidation.createSizeZodSchema),
  SizeController.addSize,
)

export const SizesRouter = router
