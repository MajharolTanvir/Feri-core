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
      validation: e.validation,
      confirmedCode: e.confirmedCode,
    },
  })
}

const updateProfile = async (e: Partial<any>) => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      syncId: e._id,
    },
  })
  const isProfileExistOnProfile = await prisma.profile.findFirst({
    where: {
      userId: isUserExist!.id,
    },
  })

  const isProfileExistOnShop = await prisma.shop.findFirst({
    where: {
      userId: isUserExist!.id,
    },
  })

  if (!isProfileExistOnProfile) {
    await prisma.profile.create({
      data: {
        userId: isUserExist!.id,
        contactNo: e.contactNo,
        presentAddress: e.presentAddress,
        profileImage: e.profileImage,
      },
    })
  } else {
    await prisma.profile.update({
      where: {
        userId: isUserExist!.id,
      },
      data: {
        contactNo: e.contactNo,
        presentAddress: e.presentAddress,
        profileImage: e.profileImage,
      },
    })
  }

  if (!isProfileExistOnShop) {
    await prisma.shop.create({
      data: {
        userId: isUserExist!.id,
        shopName: e.shopName,
        shopContactNo: e.shopContactNo,
        country: e.country,
        division: e.division,
        district: e.district,
        area: e.area,
        nidNumber: e.nidNumber,
        treadLicenseNo: e.treadLicenseNo,
      },
    })
  } else {
    await prisma.shop.update({
      where: {
        userId: isProfileExistOnShop!.userId,
      },
      data: {
        shopName: e.shopName,
        shopContactNo: e.shopContactNo,
        country: e.country,
        division: e.division,
        district: e.district,
        area: e.area,
        nidNumber: e.nidNumber,
        treadLicenseNo: e.treadLicenseNo,
      },
    })
  }
}

export const UserService = {
  createUserEvent,
  updateProfile,
}
