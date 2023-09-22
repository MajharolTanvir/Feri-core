import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { CommonValidation } from './weight.validation'
import { WeightController } from './weight.controller'
const router = express.Router()

router.patch(
  '/:id',
  validateRequest(CommonValidation.updateWeightZodSchema),
  WeightController.editWeight,
)

router.get('/', WeightController.getWeights)

router.delete('/:id', WeightController.deleteWeight)

router.post(
  '/',
  validateRequest(CommonValidation.createWeightZodSchema),
  WeightController.addWeight,
)

export const WeightRouter = router
