'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.AddToCartRouter = void 0
const express_1 = __importDefault(require('express'))
const addToCart_controller_1 = require('./addToCart.controller')
const router = express_1.default.Router()
router.post('/', addToCart_controller_1.AddToCartController.createAddToCart)
router.get('/', addToCart_controller_1.AddToCartController.getAddToCart)
router.delete(
  '/:id',
  addToCart_controller_1.AddToCartController.deleteAddToCart,
)
exports.AddToCartRouter = router
