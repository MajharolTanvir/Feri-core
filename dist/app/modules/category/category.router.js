'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CategoryRoutes = void 0
const express_1 = __importDefault(require('express'))
const category_validation_1 = require('./category.validation')
const category_controller_1 = require('./category.controller')
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const auth_1 = __importDefault(require('../../middleware/auth'))
const users_1 = require('../../../enums/users')
const router = express_1.default.Router()
router.patch(
  '/:id',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(
    category_validation_1.CategoryValidation.updateCategoryZodSchema,
  ),
  category_controller_1.CategoryController.editCategory,
)
router.get('/', category_controller_1.CategoryController.getAllCategory)
router.delete(
  '/:id',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  category_controller_1.CategoryController.deleteCategory,
)
router.post(
  '/',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(
    category_validation_1.CategoryValidation.createCategoryZodSchema,
  ),
  category_controller_1.CategoryController.addCategory,
)
exports.CategoryRoutes = router
