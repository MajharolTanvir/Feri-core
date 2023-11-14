'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.WeightRouter = void 0
const express_1 = __importDefault(require('express'))
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const weight_validation_1 = require('./weight.validation')
const weight_controller_1 = require('./weight.controller')
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
    weight_validation_1.CommonValidation.updateWeightZodSchema,
  ),
  weight_controller_1.WeightController.editWeight,
)
router.get('/', weight_controller_1.WeightController.getWeights)
router.delete(
  '/:id',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.ADMIN,
    users_1.ENUM_USER_ROLE.MODERATOR,
  ),
  weight_controller_1.WeightController.deleteWeight,
)
router.post(
  '/',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.ADMIN,
    users_1.ENUM_USER_ROLE.MODERATOR,
    users_1.ENUM_USER_ROLE.SELLER,
  ),
  (0, validateRequest_1.default)(
    weight_validation_1.CommonValidation.createWeightZodSchema,
  ),
  weight_controller_1.WeightController.addWeight,
)
exports.WeightRouter = router
