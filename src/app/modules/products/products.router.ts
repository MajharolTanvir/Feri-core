import express from 'express'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { ProductController } from './products.controller'
import validateRequest from '../../middleware/validateRequest'
import { ProductValidation } from './Product.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(ProductValidation.createProduct),
  ProductController.createProduct,
)

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getSingleProduct)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  validateRequest(ProductValidation.updateProduct),
  ProductController.updateProduct,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  ProductController.deleteProduct,
)

export const ProductRouter = router
