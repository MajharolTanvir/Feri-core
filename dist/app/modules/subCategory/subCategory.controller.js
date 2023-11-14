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
exports.SubCategoryController = void 0
const http_status_1 = __importDefault(require('http-status'))
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const subCategory_services_1 = require('./subCategory.services')
const addSubCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body
    const result =
      yield subCategory_services_1.SubCategoryService.addSubCategory(
        categoryData,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Sub category added successfully',
      data: result,
    })
  }),
)
const getAllSubCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield subCategory_services_1.SubCategoryService.getAllSubCategory()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'All sub categories retrieved successfully',
      data: result,
    })
  }),
)
const editSubCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const categoryData = req.body
    const result =
      yield subCategory_services_1.SubCategoryService.editSubCategory(
        categoryData,
        id,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Sub category edited successfully',
      data: result,
    })
  }),
)
const deleteSubCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const result =
      yield subCategory_services_1.SubCategoryService.deleteSubCategory(id)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Sub category deleted successfully',
      data: result,
    })
  }),
)
exports.SubCategoryController = {
  addSubCategory,
  getAllSubCategory,
  editSubCategory,
  deleteSubCategory,
}
