import express from 'express'
import { GlobalDiscountController } from './globalDiscount.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { GlobalDiscountValidation } from './globalDiscount.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(GlobalDiscountValidation.createGlobalDiscount),
  GlobalDiscountController.createGlobalDiscount,
)
router.get('/', GlobalDiscountController.allGlobalDiscount)
router.get('/:id', GlobalDiscountController.singleGlobalDiscount)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(GlobalDiscountValidation.updateGlobalDiscount),
  GlobalDiscountController.updateGlobalDiscount,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  GlobalDiscountController.deleteGlobalDiscount,
)

export const GlobalDiscountRouter = router
