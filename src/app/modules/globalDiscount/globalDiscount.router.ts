import express from 'express'
import { GlobalRequestController } from './globalDiscount.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { GlobalDiscountValidation } from './globalDiscount.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(GlobalDiscountValidation.createGlobalDiscount),
  GlobalRequestController.createGlobalDiscount,
)
router.get('/', GlobalRequestController.allGlobalDiscount)
router.get('/:id', GlobalRequestController.singleGlobalDiscount)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(GlobalDiscountValidation.updateGlobalDiscount),
  GlobalRequestController.updateGlobalDiscount,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  GlobalRequestController.deleteGlobalDiscount,
)

export const GlobalDiscountRouter = router
