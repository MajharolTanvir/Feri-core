import express from 'express'
import { BlogController } from './blog.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middleware/validateRequest'
import { BlogValidation } from './blog.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.createBlog),
  BlogController.createBlog,
)
router.get('/', BlogController.allBlog)
router.get('/:id', BlogController.singleBlog)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.updateBlog),
  BlogController.updateBlog,
)
router.post('/:id', BlogController.deleteBlog)

export const BlogRouter = router
