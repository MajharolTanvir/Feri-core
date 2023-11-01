/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'

const createBooking = async (bookingData: any, userId: string) => {
  const { productIds, ...data } = bookingData
  bookingData.buyerId = userId
  const result = await prisma.booking.create({
    data,
  })

  productIds.map((productId: string) =>
    prisma.productBooking.create({
      data: {
        bookingId: result.id,
        productId: productId,
      },
    }),
  )

  return result
}

const getBooking = async (userId: string) => {
  return await prisma.booking.findMany({
    where: {
      buyerId: userId,
    },
    include: {
      buyer: true,
      Product: true,
      ProductBooking: true,
    },
  })
}

const deleteBooking = async (id: string, userId: string) => {
  return await prisma.booking.delete({
    where: {
      id,
      buyerId: userId,
    },
  })
}

export const BookingServices = {
  createBooking,
  getBooking,
  deleteBooking,
}
