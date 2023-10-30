import express from 'express'
import { ReviewController } from './review.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'

const router = express.Router()

router.get('/', ReviewController.getReview)
router.post('/', auth(ENUM_USER_ROLE.BUYER), ReviewController.createReview)
router.post(
  '/replay',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  ReviewController.createComment,
)
router.get('/:id', auth(ENUM_USER_ROLE.BUYER), ReviewController.updateReview)
