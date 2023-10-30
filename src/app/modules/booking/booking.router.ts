import express from 'express'
import { BookingController } from './booking.controller'

const router = express.Router()

router.get('/', BookingController.getAddToCart)
router.post('/', BookingController.createBooking)
router.delete('/', BookingController.deleteAddToCart)

export const BookingRouter = router
