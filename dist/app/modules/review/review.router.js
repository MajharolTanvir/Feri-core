'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReviewRouter = void 0
const express_1 = __importDefault(require('express'))
const review_controller_1 = require('./review.controller')
const auth_1 = __importDefault(require('../../middleware/auth'))
const users_1 = require('../../../enums/users')
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const review_validation_1 = require('./review.validation')
const router = express_1.default.Router()
router.get('/', review_controller_1.ReviewController.getReview)
router.post(
  '/',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.BUYER),
  (0, validateRequest_1.default)(
    review_validation_1.ReviewValidation.createReview,
  ),
  review_controller_1.ReviewController.createReview,
)
router.post(
  '/replay',
  (0, auth_1.default)(
    users_1.ENUM_USER_ROLE.BUYER,
    users_1.ENUM_USER_ROLE.SELLER,
  ),
  review_controller_1.ReviewController.createComment,
)
router.patch(
  '/:id',
  (0, auth_1.default)(users_1.ENUM_USER_ROLE.BUYER),
  (0, validateRequest_1.default)(
    review_validation_1.ReviewValidation.updateReview,
  ),
  review_controller_1.ReviewController.updateReview,
)
exports.ReviewRouter = router
