import { Booking } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createBooking = async (data: Booking) => {
  const result = await prisma.booking.create({
    data,
  })

  return result
}

const getBooking = async () => {
  return await prisma.booking.findMany({
    include: {
      buyer: true,
      Product: true,
      ProductBooking: true,
    },
  })
}

const deleteBooking = async (id: string) => {
  return await prisma.booking.delete({
    where: {
      id,
    },
  })
}

export const BookingServices = {
  createBooking,
  getBooking,
  deleteBooking,
}
