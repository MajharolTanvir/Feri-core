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
exports.BlogController = void 0
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const http_status_1 = __importDefault(require('http-status'))
const blog_services_1 = require('./blog.services')
const createBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user
    const result = yield blog_services_1.BlogServices.createBlog(
      userId,
      req.body,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Blog created successfully!',
      data: result,
    })
  }),
)
const allBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_services_1.BlogServices.allBlog()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Blogs retrieved successfully!',
      data: result,
    })
  }),
)
const singleBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_services_1.BlogServices.singleBlog(req.params.id)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Blog retrieved successfully!',
      data: result,
    })
  }),
)
const updateBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user
    const result = yield blog_services_1.BlogServices.updateBlog(
      req.params.id,
      userId,
      req.body,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Blog updated successfully!',
      data: result,
    })
  }),
)
const deleteBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user
    const result = yield blog_services_1.BlogServices.deleteBlog(
      req.params.id,
      userId,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Blog deleted successfully!',
      data: result,
    })
  }),
)
exports.BlogController = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
}
