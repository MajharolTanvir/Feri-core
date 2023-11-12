import express from 'express'
import { UsersController } from './users.controller'
import { UsersValidation } from './users.validation'
import validateRequest from '../../middleware/validateRequest'
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middleware/auth'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(UsersValidation.signupZodSchema),
  UsersController.signup,
)
router.post(
  '/signin',
  validateRequest(UsersValidation.signInZodSchema),
  UsersController.signIn,
)

router.post(
  '/confirm-signup',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  UsersController.confirmedSignup,
)

router.post('/forget-password', UsersController.forgetPassword)
router.post('/reset-password', UsersController.resetPassword)

export const UsersRouter = router
