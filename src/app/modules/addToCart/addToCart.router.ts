import express from 'express'
import { AddToCartController } from './addToCart.controller'

const router = express.Router()

router.post('/', AddToCartController.createAddToCart)
router.get('/', AddToCartController.getAddToCart)
router.delete('/:id', AddToCartController.deleteAddToCart)

export const AddToCartRouter = router
