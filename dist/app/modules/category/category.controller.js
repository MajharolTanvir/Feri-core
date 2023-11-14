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
exports.CategoryController = void 0
const http_status_1 = __importDefault(require('http-status'))
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const category_services_1 = require('./category.services')
const addCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body
    const result =
      yield category_services_1.CategoryService.addCategory(categoryData)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Category added successfully',
      data: result,
    })
  }),
)
const getAllCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_services_1.CategoryService.getAllCategory()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'All categories retrieved successfully',
      data: result,
    })
  }),
)
const editCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const result = yield category_services_1.CategoryService.editCategory(
      req.body,
      id,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Category edited successfully',
      data: result,
    })
  }),
)
const deleteCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const result = yield category_services_1.CategoryService.deleteCategory(id)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Category deleted successfully',
      data: result,
    })
  }),
)
exports.CategoryController = {
  addCategory,
  getAllCategory,
  editCategory,
  deleteCategory,
}
