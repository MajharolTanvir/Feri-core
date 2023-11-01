import express from 'express'
import { LocalDiscountController } from './localDiscount.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { LocalDiscountValidation } from './localDiscount.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  validateRequest(LocalDiscountValidation.createLocalDiscount),
  LocalDiscountController.createLocalDiscount,
)
router.get('/', LocalDiscountController.allLocalDiscount)
router.get('/:id', LocalDiscountController.singleLocalDiscount)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  LocalDiscountController.deleteLocalDiscount,
)

export const localDiscountRouter = router
