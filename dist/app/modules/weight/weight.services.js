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
exports.WeightService = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
//* Weight services
const addWeight = weightData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const weight = yield prisma_1.default.weight.create({ data: weightData })
    return weight
  })
const getWeights = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const sizes = yield prisma_1.default.weight.findMany({})
    return sizes
  })
const editWeight = (weightData, id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const weight = yield prisma_1.default.weight.update({
      where: { id },
      data: weightData,
    })
    return weight
  })
const deleteWeight = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const weight = yield prisma_1.default.weight.delete({ where: { id } })
    return weight
  })
exports.WeightService = {
  addWeight,
  getWeights,
  editWeight,
  deleteWeight,
}
