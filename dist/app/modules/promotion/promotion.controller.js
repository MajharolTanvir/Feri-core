'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.PromotionController = void 0
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const promotion_services_1 = require('./promotion.services')
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const http_status_1 = __importDefault(require('http-status'))
const createPromotion = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promotion_services_1.PromotionServices.createPromotion(
      req.body,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Promotion created successfully!',
      data: result,
    })
  }),
)
const allPromotion = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promotion_services_1.PromotionServices.allPromotion()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Promotions retrieved successfully!',
      data: result,
    })
  }),
)
const singlePromotion = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promotion_services_1.PromotionServices.singlePromotion(
      req.params.id,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Promotion retrieved successfully!',
      data: result,
    })
  }),
)
const updatePromotion = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promotion_services_1.PromotionServices.updatePromotion(
      req.params.id,
      req.body,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Promotion updated successfully!',
      data: result,
    })
  }),
)
const deletePromotion = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promotion_services_1.PromotionServices.deletePromotion(
      req.params.id,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Promotion deleted successfully!',
      data: result,
    })
  }),
)
exports.PromotionController = {
  createPromotion,
  allPromotion,
  singlePromotion,
  updatePromotion,
  deletePromotion,
}
