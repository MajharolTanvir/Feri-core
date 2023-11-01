import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { SubCategoryValidation } from './subCategory.validation'
import { SubCategoryController } from './subCategory.controller'
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middleware/auth'
const router = express.Router()

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(SubCategoryValidation.updateSubCategoryZodSchema),
  SubCategoryController.editSubCategory,
)

router.get('/', SubCategoryController.getAllSubCategory)

router.delete('/:id', SubCategoryController.deleteSubCategory)

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(SubCategoryValidation.createSubCategoryZodSchema),
  SubCategoryController.addSubCategory,
)

export const SubCategoryRoutes = router
