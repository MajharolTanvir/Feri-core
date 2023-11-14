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
exports.ReviewServices = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const createReview = (data, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    data.buyerId = userId
    return yield prisma_1.default.review.create({
      data,
    })
  })
const getReview = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.findMany({
      include: {
        buyer: true,
        product: true,
        Comment: true,
      },
    })
  })
const updateReview = (id, userId, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.update({
      where: {
        id,
        buyerId: userId,
      },
      data,
    })
  })
const createComment = data =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.comment.create({
      data,
    })
  })
exports.ReviewServices = {
  createComment,
  createReview,
  getReview,
  updateReview,
}
