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
exports.SizeService = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const addSize = sizeData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const size = yield prisma_1.default.size.create({ data: sizeData })
    return size
  })
const getSizes = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const sizes = yield prisma_1.default.size.findMany({})
    return sizes
  })
const editSize = (sizeData, id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const size = yield prisma_1.default.size.update({
      where: { id },
      data: sizeData,
    })
    return size
  })
const deleteSize = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const size = yield prisma_1.default.size.delete({ where: { id } })
    return size
  })
exports.SizeService = {
  addSize,
  getSizes,
  editSize,
  deleteSize,
}
