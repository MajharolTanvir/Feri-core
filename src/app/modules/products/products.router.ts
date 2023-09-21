import express from 'express'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { ProductController } from './products.controller'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  ProductController.createProduct,
)

export const ProductRouter = router
