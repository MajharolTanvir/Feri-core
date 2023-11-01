import express from 'express'
import { PromotionController } from './promotion.controller'

const router = express.Router()

router.post('/', PromotionController.createPromotion)
router.get('/', PromotionController.allPromotion)
router.get('/:id', PromotionController.singlePromotion)
router.patch('/:id', PromotionController.updatePromotion)
router.post('/:id', PromotionController.deletePromotion)

export const PromotionRouter = router
