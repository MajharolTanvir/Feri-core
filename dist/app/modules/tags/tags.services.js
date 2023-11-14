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
exports.TagsService = void 0
const prisma_1 = __importDefault(require('../../../shared/prisma'))
const createTags = tagsData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.tags.create({
      data: tagsData,
    })
    return result
  })
const getAllTags = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.tags.findMany()
    return result
  })
const updateTags = (id, updateData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.tags.update({
      where: {
        id,
      },
      data: updateData,
    })
    return result
  })
const deleteTags = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.tags.delete({
      where: {
        id,
      },
    })
    return result
  })
exports.TagsService = {
  createTags,
  getAllTags,
  updateTags,
  deleteTags,
}
