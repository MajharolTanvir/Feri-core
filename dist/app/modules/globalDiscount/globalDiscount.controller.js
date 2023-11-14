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
exports.GlobalDiscountController = void 0
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const globalDiscount_services_1 = require('./globalDiscount.services')
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const http_status_1 = __importDefault(require('http-status'))
const createGlobalDiscount = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield globalDiscount_services_1.GlobalDiscountServices.createGlobalDiscount(
        req.body,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Global discount created successfully!',
      data: result,
    })
  }),
)
const allGlobalDiscount = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield globalDiscount_services_1.GlobalDiscountServices.allGlobalDiscount()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Global discounts retrieved successfully!',
      data: result,
    })
  }),
)
const singleGlobalDiscount = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield globalDiscount_services_1.GlobalDiscountServices.singleGlobalDiscount(
        req.params.id,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Global discount retrieved successfully!',
      data: result,
    })
  }),
)
const updateGlobalDiscount = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield globalDiscount_services_1.GlobalDiscountServices.updateGlobalDiscount(
        req.params.id,
        req.body,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Global discount updated successfully!',
      data: result,
    })
  }),
)
const deleteGlobalDiscount = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield globalDiscount_services_1.GlobalDiscountServices.deleteGlobalDiscount(
        req.params.id,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Global discount deleted successfully!',
      data: result,
    })
  }),
)
exports.GlobalDiscountController = {
  createGlobalDiscount,
  allGlobalDiscount,
  singleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount,
}
