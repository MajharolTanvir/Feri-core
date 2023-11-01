import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { CommonValidation } from './weight.validation'
import { WeightController } from './weight.controller'
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middleware/auth'
const router = express.Router()

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(CommonValidation.updateWeightZodSchema),
  WeightController.editWeight,
)

router.get('/', WeightController.getWeights)

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  WeightController.deleteWeight,
)

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  validateRequest(CommonValidation.createWeightZodSchema),
  WeightController.addWeight,
)

export const WeightRouter = router
