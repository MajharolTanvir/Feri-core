import express from 'express'
import { CategoryValidation } from './category.validation'
import { CategoryController } from './category.controller'
import validateRequest from '../../middleware/validateRequest'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
const router = express.Router()

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateCategoryZodSchema),
  CategoryController.editCategory,
)

router.get('/', CategoryController.getAllCategory)

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory,
)

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.addCategory,
)

export const CategoryRoutes = router
