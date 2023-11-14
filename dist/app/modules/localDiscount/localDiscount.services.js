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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.LocalDiscountServices = void 0
/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const createLocalDiscount = (discountData, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { products } = discountData,
      data = __rest(discountData, ['products'])
    data.sellerId = userId
    const result = yield prisma_1.default.localDiscount.create({
      data,
      include: {
        promoCodeWithProduct: {
          include: {
            product: true,
          },
        },
      },
    })
    products.map(product =>
      __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma_1.default.promoCodeWithProduct.create({
          data: {
            localDiscountId: result.id,
            productId: product,
          },
        })
      }),
    )
    return result
  })
const allLocalDiscount = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.localDiscount.findMany({
      include: {
        promoCodeWithProduct: {
          include: {
            product: true,
          },
        },
      },
    })
  })
const singleLocalDiscount = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.localDiscount.findFirst({
      where: {
        id,
      },
      include: {
        promoCodeWithProduct: {
          include: {
            product: true,
          },
        },
      },
    })
  })
const deleteLocalDiscount = (id, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isDiscount = yield prisma_1.default.localDiscount.findFirst({
      where: { id, sellerId: userId },
    })
    yield prisma_1.default.promoCodeWithProduct.deleteMany({
      where: {
        localDiscountId:
          isDiscount === null || isDiscount === void 0 ? void 0 : isDiscount.id,
      },
    })
    return yield prisma_1.default.localDiscount.delete({
      where: {
        id:
          isDiscount === null || isDiscount === void 0 ? void 0 : isDiscount.id,
      },
    })
  })
exports.LocalDiscountServices = {
  createLocalDiscount,
  allLocalDiscount,
  singleLocalDiscount,
  deleteLocalDiscount,
}
