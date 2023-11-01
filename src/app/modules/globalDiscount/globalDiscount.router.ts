import express from 'express'
import { GlobalRequestController } from './globalDiscount.controller'

const router = express.Router()

router.post('/', GlobalRequestController.createGlobalDiscount)
router.get('/', GlobalRequestController.allGlobalDiscount)
router.get('/:id', GlobalRequestController.singleGlobalDiscount)
router.patch('/:id', GlobalRequestController.updateGlobalDiscount)
router.delete('/:id', GlobalRequestController.deleteGlobalDiscount)

export const GlobalDiscountRouter = router
