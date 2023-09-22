import express from 'express'
import { CategoryValidation } from './category.validation'
import { CategoryController } from './category.controller'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

router.patch(
  '/:id',
  validateRequest(CategoryValidation.updateCategoryZodSchema),
  CategoryController.editCategory,
)

router.get('/', CategoryController.getAllCategory)

router.delete('/:id', CategoryController.deleteCategory)

router.post(
  '/',
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.addCategory,
)

export const CategoryRoutes = router
