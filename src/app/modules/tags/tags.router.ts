import express from 'express'
import { TagsController } from './tags.controller'
import validateRequest from '../../middleware/validateRequest'
import { TagsValidation } from './tags.validation'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'

const router = express.Router()

router.get('/', TagsController.getAllTags)
router.post(
  '/',
  validateRequest(TagsValidation.create),
  TagsController.createTags,
)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  TagsController.updateTags,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  TagsController.deleteTags,
)

export const TagsRouter = router
