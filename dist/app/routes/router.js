'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const category_router_1 = require('../modules/category/category.router')
const subCategory_router_1 = require('../modules/subCategory/subCategory.router')
const color_router_1 = require('../modules/color/color.router')
const size_router_1 = require('../modules/size/size.router')
const weight_router_1 = require('../modules/weight/weight.router')
const tags_router_1 = require('../modules/tags/tags.router')
const products_router_1 = require('../modules/products/products.router')
const addToCart_router_1 = require('../modules/addToCart/addToCart.router')
const booking_router_1 = require('../modules/booking/booking.router')
const review_router_1 = require('../modules/review/review.router')
const globalDiscount_router_1 = require('../modules/globalDiscount/globalDiscount.router')
const localDiscount_router_1 = require('../modules/localDiscount/localDiscount.router')
const promotion_router_1 = require('../modules/promotion/promotion.router')
const blog_router_1 = require('../modules/blog/blog.router')
const feedback_router_1 = require('../modules/feedback/feedback.router')
const router = express_1.default.Router()
const moduleRoutes = [
  {
    path: '/categories',
    route: category_router_1.CategoryRoutes,
  },
  {
    path: '/subcategories',
    route: subCategory_router_1.SubCategoryRoutes,
  },
  {
    path: '/colors',
    route: color_router_1.ColorRouter,
  },
  {
    path: '/sizes',
    route: size_router_1.SizesRouter,
  },
  {
    path: '/weights',
    route: weight_router_1.WeightRouter,
  },
  {
    path: '/tags',
    route: tags_router_1.TagsRouter,
  },
  {
    path: '/products',
    route: products_router_1.ProductRouter,
  },
  {
    path: '/add-to-cart',
    route: addToCart_router_1.AddToCartRouter,
  },
  {
    path: '/bookings',
    route: booking_router_1.BookingRouter,
  },
  {
    path: '/reviews',
    route: review_router_1.ReviewRouter,
  },
  {
    path: '/global-discounts',
    route: globalDiscount_router_1.GlobalDiscountRouter,
  },
  {
    path: '/local-discounts',
    route: localDiscount_router_1.localDiscountRouter,
  },
  {
    path: '/promotions',
    route: promotion_router_1.PromotionRouter,
  },
  {
    path: '/blogs',
    route: blog_router_1.BlogRouter,
  },
  {
    path: '/feedbacks',
    route: feedback_router_1.FeedbackRouter,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))
exports.default = router
