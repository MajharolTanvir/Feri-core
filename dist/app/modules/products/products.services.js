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
exports.ProductService = void 0
/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const product_utils_1 = require('./product.utils')
const ApiError_1 = __importDefault(require('../../../errors/ApiError'))
const http_status_1 = __importDefault(require('http-status'))
const createProduct = (userId, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    payload.product.sellerId = userId
    const createProducts = yield prisma_1.default.$transaction(
      transactionProduct =>
        __awaiter(void 0, void 0, void 0, function* () {
          const createProduct = yield transactionProduct.product.create({
            data: payload.product,
          })
          yield product_utils_1.ProductUtils.createProductWithDetails(
            createProduct.id,
            payload,
            transactionProduct,
          )
          return yield transactionProduct.product.findFirst({
            where: {
              id: createProduct.id,
            },
            include: {
              Image: true,
              ColorConnection: {
                include: {
                  color: true,
                },
              },
              SizeConnection: {
                include: {
                  size: true,
                },
              },
              WeightConnection: {
                include: {
                  weight: true,
                },
              },
              TagsConnection: {
                include: {
                  tags: true,
                },
              },
              subCategory: true,
              FreeDelivery: true,
              PaidDelivery: true,
              PromoCodeWithProduct: {
                include: {
                  localDiscount: true,
                },
              },
            },
          })
        }),
    )
    return createProducts
  })
const getAllProducts = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.findMany({
      include: {
        Image: true,
        ColorConnection: {
          include: {
            color: true,
          },
        },
        SizeConnection: {
          include: {
            size: true,
          },
        },
        WeightConnection: {
          include: {
            weight: true,
          },
        },
        TagsConnection: {
          include: {
            tags: true,
          },
        },
        subCategory: true,
        FreeDelivery: true,
        PaidDelivery: true,
        reviews: true,
        seller: true,
        PromoCodeWithProduct: {
          include: {
            localDiscount: true,
          },
        },
      },
    })
    const total = yield prisma_1.default.product.count()
    return {
      meta: {
        total,
      },
      data: result,
    }
  })
const getSingleProduct = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.findFirst({
      where: {
        id,
      },
      include: {
        Image: true,
        ColorConnection: {
          include: {
            color: true,
          },
        },
        SizeConnection: {
          include: {
            size: true,
          },
        },
        WeightConnection: {
          include: {
            weight: true,
          },
        },
        TagsConnection: {
          include: {
            tags: true,
          },
        },
        subCategory: true,
        FreeDelivery: true,
        PaidDelivery: true,
        reviews: true,
        seller: true,
        PromoCodeWithProduct: {
          include: {
            localDiscount: true,
          },
        },
      },
    })
    return result
  })
const updateProduct = (id, userId, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExistProduct = yield prisma_1.default.product.findFirst({
      where: {
        id,
        sellerId: userId,
      },
    })
    if (!isExistProduct) {
      throw new ApiError_1.default(
        http_status_1.default.BAD_REQUEST,
        'Product not found',
      )
    }
    const result = yield product_utils_1.ProductUtils.updateProductWithDetails(
      isExistProduct,
      payload,
    )
    return result
  })
const deleteProduct = (id, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.delete({
      where: {
        id,
        sellerId: userId,
      },
    })
    return result
  })
exports.ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
