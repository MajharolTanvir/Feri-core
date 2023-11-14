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
exports.ColorService = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const addColor = colorData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const color = yield prisma_1.default.color.create({
      data: colorData,
    })
    return color
  })
const getColors = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const colors = yield prisma_1.default.color.findMany({})
    return colors
  })
const editColor = (colorData, id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const color = yield prisma_1.default.color.update({
      where: { id },
      data: colorData,
    })
    return color
  })
const deleteColor = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const color = yield prisma_1.default.color.delete({ where: { id } })
    return color
  })
exports.ColorService = {
  addColor,
  getColors,
  editColor,
  deleteColor,
}
