/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { userSearchAbleField } from './profile.constant'
import { IUserFilterType } from './profile.interface'
import { paginationHelpers } from '../../../shared/paginationHelper'
import prisma from '../../../shared/prisma'

const changeRole = async (id: string, data: any) => {
  await prisma.user.update({
    where: {
      id,
    },
    data,
  })
}

const profileUpdate = async (id: string, userData: any) => {
  const { firstName, middleName, lastName, ...data } = userData
  let result = null
  console.log(firstName, middleName, lastName)

  if (data) {
    result = await prisma.profile.update({
      where: {
        userId: id,
      },
      data,
    })
  }

  result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    },
  })

  return result
}

const getProfile = async (id: string) => {
  const profile = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      Profile: true,
    },
  })

  return profile
}

const getSingleProfile = async (id: string) => {
  const profile = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      Profile: true,
    },
  })

  return profile
}

const getAllProfile = async (
  filters: IUserFilterType,
  options: IPaginationOptions,
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options)
  const { searchTerm, ...filterData } = filters

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      OR: userSearchAbleField.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filterData as any)[key],
        },
      })),
    })
  }

  const whereCondition: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}

  const profile = await prisma.profile.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      user: true,
    },
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  })
  const total = await prisma.user.count()
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: profile,
  }
}

export const ProfileService = {
  profileUpdate,
  getProfile,
  getSingleProfile,
  getAllProfile,
  changeRole,
}
