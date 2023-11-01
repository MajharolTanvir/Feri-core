import express from 'express'
import { ColorController } from './color.controller'
import validateRequest from '../../middleware/validateRequest'
import { ColorValidation } from './color.validation'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'

const router = express.Router()

//* Color routes

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(ColorValidation.updateColorZodSchema),
  ColorController.editColor,
)

router.get('/', ColorController.getColors)

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), ColorController.deleteColor)

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  validateRequest(ColorValidation.createColorZodSchema),
  ColorController.addColor,
)

export const ColorRouter = router
