'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.PromotionRouter = void 0
const express_1 = __importDefault(require('express'))
const promotion_controller_1 = require('./promotion.controller')
const auth_1 = __importDefault(require('../../middleware/auth'))
const users_1 = require('../../../enums/users')
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const promotion_validation_1 = require('./promotion.validation')
const router = express_1.default.Router()
router.post(
  '/',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.SELLER,
    users_1.ENUM_USER_ROLE.MODERATOR,
    users_1.ENUM_USER_ROLE.ADMIN,
  ),
  (0, validateRequest_1.default)(
    promotion_validation_1.PromotionValidation.createPromotion,
  ),
  promotion_controller_1.PromotionController.createPromotion,
)
router.get('/', promotion_controller_1.PromotionController.allPromotion)
router.get('/:id', promotion_controller_1.PromotionController.singlePromotion)
router.patch(
  '/:id',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.SELLER,
    users_1.ENUM_USER_ROLE.MODERATOR,
    users_1.ENUM_USER_ROLE.ADMIN,
  ),
  (0, validateRequest_1.default)(
    promotion_validation_1.PromotionValidation.updatePromotion,
  ),
  promotion_controller_1.PromotionController.updatePromotion,
)
router.delete(
  '/:id',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.MODERATOR,
    users_1.ENUM_USER_ROLE.ADMIN,
  ),
  promotion_controller_1.PromotionController.deletePromotion,
)
exports.PromotionRouter = router
