'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.GlobalDiscountRouter = void 0
const express_1 = __importDefault(require('express'))
const globalDiscount_controller_1 = require('./globalDiscount.controller')
const auth_1 = __importDefault(require('../../middleware/auth'))
const users_1 = require('../../../enums/users')
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const globalDiscount_validation_1 = require('./globalDiscount.validation')
const router = express_1.default.Router()
router.post(
  '/',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(
    globalDiscount_validation_1.GlobalDiscountValidation.createGlobalDiscount,
  ),
  globalDiscount_controller_1.GlobalDiscountController.createGlobalDiscount,
)
router.get(
  '/',
  globalDiscount_controller_1.GlobalDiscountController.allGlobalDiscount,
)
router.get(
  '/:id',
  globalDiscount_controller_1.GlobalDiscountController.singleGlobalDiscount,
)
router.patch(
  '/:id',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(
    globalDiscount_validation_1.GlobalDiscountValidation.updateGlobalDiscount,
  ),
  globalDiscount_controller_1.GlobalDiscountController.updateGlobalDiscount,
)
router.delete(
  '/:id',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN),
  globalDiscount_controller_1.GlobalDiscountController.deleteGlobalDiscount,
)
exports.GlobalDiscountRouter = router
