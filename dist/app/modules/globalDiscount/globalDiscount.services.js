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
exports.GlobalDiscountServices = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const createGlobalDiscount = data =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.globalDiscount.create({
      data,
    })
  })
const allGlobalDiscount = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.globalDiscount.findMany({})
  })
const singleGlobalDiscount = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.globalDiscount.findFirst({
      where: {
        id,
      },
    })
  })
const updateGlobalDiscount = (id, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.globalDiscount.update({
      where: {
        id,
      },
      data,
    })
  })
const deleteGlobalDiscount = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.globalDiscount.delete({
      where: {
        id,
      },
    })
  })
exports.GlobalDiscountServices = {
  createGlobalDiscount,
  allGlobalDiscount,
  singleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount,
}
