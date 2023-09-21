/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from '../../../shared/prisma'

const createUserEvent = async (e: any) => {
  await prisma.user.create({
    data: {
      syncId: e._id,
      firstName: e.firstName,
      middleName: e.middleName,
      lastName: e.lastName,
      email: e.email,
      password: e.password,
      role: e.role,
      token: e.token,
    },
  })
}

const updateProfile = async (userId: string, profileData: any) => {
  const isProfileExist = await prisma.profile.findFirst({
    where: {
      userId: profileData.userId,
    },
  })

  if (!isProfileExist) {
    const profile = await prisma.profile.create({
      data: profileData,
    })
    return profile
  } else {
    const profile = await prisma.profile.update({
      where: {
        userId: isProfileExist.userId,
      },
      data: profileData,
    })

    return profile
  }
}

export const UserService = {
  createUserEvent,
  updateProfile,
}
