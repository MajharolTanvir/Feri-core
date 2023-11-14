import express from 'express'
import { ProfileController } from './profile.controller'
import { ProfileValidation } from './profile.validation'
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middleware/auth'
import validateRequest from '../../middleware/validateRequest'

const router = express.Router()

router.patch(
  '/',
  auth(
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.MODERATOR,
    ENUM_USER_ROLE.ADMIN,
  ),
  validateRequest(ProfileValidation.profileUpdateZodValidation),
  ProfileController.profileUpdate,
)

router.get(
  '/user-profile',
  auth(
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
  ),
  ProfileController.getProfile,
)

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
  ),
  ProfileController.getSingleProfile,
)

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MODERATOR,
  ),
  ProfileController.getAllProfile,
)

router.patch(
  '/change-role/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProfileController.changeRole,
)

export const ProfileRouter = router
