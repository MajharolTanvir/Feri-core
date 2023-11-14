'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.SubCategoryRoutes = void 0
const express_1 = __importDefault(require('express'))
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const subCategory_validation_1 = require('./subCategory.validation')
const subCategory_controller_1 = require('./subCategory.controller')
const users_1 = require('../../../enums/users')
const auth_1 = __importDefault(require('../../middleware/auth'))
const router = express_1.default.Router()
router.patch(
  '/:id',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.ADMIN,
    users_1.ENUM_USER_ROLE.MODERATOR,
  ),
  (0, validateRequest_1.default)(
    subCategory_validation_1.SubCategoryValidation.updateSubCategoryZodSchema,
  ),
  subCategory_controller_1.SubCategoryController.editSubCategory,
)
router.get(
  '/',
  subCategory_controller_1.SubCategoryController.getAllSubCategory,
)
router.delete(
  '/:id',
  subCategory_controller_1.SubCategoryController.deleteSubCategory,
)
router.post(
  '/',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.ADMIN,
    users_1.ENUM_USER_ROLE.MODERATOR,
  ),
  (0, validateRequest_1.default)(
    subCategory_validation_1.SubCategoryValidation.createSubCategoryZodSchema,
  ),
  subCategory_controller_1.SubCategoryController.addSubCategory,
)
exports.SubCategoryRoutes = router
