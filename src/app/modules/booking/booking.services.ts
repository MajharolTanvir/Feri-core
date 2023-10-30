/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'

const createBooking = async (bookingData: any) => {
  const { productIds, ...data } = bookingData
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
