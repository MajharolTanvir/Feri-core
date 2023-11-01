import express from 'express'
import { ReviewController } from './review.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { ReviewValidation } from './review.validation'

const router = express.Router()

router.get('/', ReviewController.getReview)
router.post(
  '/',
  auth(ENUM_USER_ROLE.BUYER),
  validateRequest(ReviewValidation.createReview),
  ReviewController.createReview,
)
router.post(
  '/replay',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  ReviewController.createComment,
)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.BUYER),
  validateRequest(ReviewValidation.updateReview),
  ReviewController.updateReview,
)

export const ReviewRouter = router
