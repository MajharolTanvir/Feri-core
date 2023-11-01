import express from 'express'
import { PromotionController } from './promotion.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { PromotionValidation } from './promotion.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(PromotionValidation.createPromotion),
  PromotionController.createPromotion,
)
router.get('/', PromotionController.allPromotion)
router.get('/:id', PromotionController.singlePromotion)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(PromotionValidation.updatePromotion),
  PromotionController.updatePromotion,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  PromotionController.deletePromotion,
)

export const PromotionRouter = router
