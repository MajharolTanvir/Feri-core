import express from 'express'
import { BookingController } from './booking.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { BookingValidation } from './booking.validation'

const router = express.Router()

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
  ),
  BookingController.getAddToCart,
)

router.post(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
  ),
  validateRequest(BookingValidation.createBooking),
  BookingController.createBooking,
)

router.delete(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
  ),
  BookingController.deleteAddToCart,
)

export const BookingRouter = router
