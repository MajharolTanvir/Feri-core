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
exports.PromotionServices = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const createPromotion = data =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.promotion.create({
      data,
    })
  })
const allPromotion = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.promotion.findMany()
  })
const singlePromotion = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.promotion.findFirst({
      where: {
        id,
      },
      include: {
        product: true,
      },
    })
  })
const updatePromotion = (id, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.promotion.update({
      where: {
        id,
      },
      data,
    })
  })
const deletePromotion = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.promotion.delete({
      where: {
        id,
      },
    })
  })
exports.PromotionServices = {
  createPromotion,
  allPromotion,
  singlePromotion,
  updatePromotion,
  deletePromotion,
}
