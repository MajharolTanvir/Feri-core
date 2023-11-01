import express from 'express'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { FeedbackValidation } from './feedback.validation'
import { FeedbackController } from './feedback.controller'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER),
  validateRequest(FeedbackValidation.createFeedback),
  FeedbackController.createFeedback,
)
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbackController.allFeedback,
)
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbackController.singleFeedback,
)
router.post(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbackController.deleteFeedback,
)

export const FeedbackRouter = router
