import express from 'express'
import { LocalDiscountController } from './localDiscount.controller'

const router = express.Router()

router.post('/', LocalDiscountController.createLocalDiscount)
router.get('/', LocalDiscountController.allLocalDiscount)
router.get('/:id', LocalDiscountController.singleLocalDiscount)
router.delete('/:id', LocalDiscountController.deleteLocalDiscount)

export const localDiscountRouter = router
