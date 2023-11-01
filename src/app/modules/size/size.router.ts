import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { SizeController } from './size.controller'
import { SizeValidation } from './size.validation'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
const router = express.Router()

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  validateRequest(SizeValidation.updateSizeZodSchema),
  SizeController.editSize,
)

router.get('/', SizeController.getSizes)

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  SizeController.deleteSize,
)

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  validateRequest(SizeValidation.createSizeZodSchema),
  SizeController.addSize,
)

export const SizesRouter = router
