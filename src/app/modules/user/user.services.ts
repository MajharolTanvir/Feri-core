/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'
import { jwtHelpers } from '../../../shared/jwtHelper'
import prisma from '../../../shared/prisma'

const signup = async (payload: User) => {
  if (payload?.password) {
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    )
    payload.password = hashedPassword
  }

  const result = await prisma.user.create({
    data: payload,
  })

  const { id: userId, email: userEmail, role: userRole } = result

  const accessToken = jwtHelpers.createToken(
    {
      userId,
      userEmail,
      userRole,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  return {
    result,
    accessToken,
  }
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

export const AuthService = {
  signup,
  updateProfile,
}
