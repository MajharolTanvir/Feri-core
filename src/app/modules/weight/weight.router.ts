import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { CommonValidation } from './weight.validation'
import { WeightController } from './weight.controller'
const router = express.Router()

//* weight routes
router.patch(
  '/edit-weight/:id',
  validateRequest(CommonValidation.updateWeightZodSchema),
  WeightController.editWeight,
)

router.get('/get-weight', WeightController.getWeights)

router.delete('/delete-weight/:id', WeightController.deleteWeight)

router.post(
  '/add-weight',
  validateRequest(CommonValidation.createWeightZodSchema),
  WeightController.addWeight,
)

export const WeightRouter = router
