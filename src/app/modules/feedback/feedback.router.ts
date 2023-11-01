import express from 'express'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { FeedbackValidation } from './feedback.validation'
import { FeedbackController } from './feedback.controller'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(FeedbackValidation.createFeedback),
  FeedbackController.createFeedback,
)
router.get('/', FeedbackController.allFeedback)
router.get('/:id', FeedbackController.singleFeedback)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(FeedbackValidation.updateFeedback),
  FeedbackController.updateFeedback,
)
router.post('/:id', FeedbackController.deleteFeedback)

export const FeedbackRouter = router
