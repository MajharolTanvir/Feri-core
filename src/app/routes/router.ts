import express from 'express'
import { CategoryRoutes } from '../modules/category/category.router'
import { SubCategoryRoutes } from '../modules/subCategory/subCategory.router'
import { ColorRouter } from '../modules/color/color.router'
import { SizesRouter } from '../modules/size/size.router'
import { WeightRouter } from '../modules/weight/weight.router'
import { TagsRouter } from '../modules/tags/tags.router'
import { ProductRouter } from '../modules/products/products.router'
import { AddToCartRouter } from '../modules/addToCart/addToCart.router'
import { BookingRouter } from '../modules/booking/booking.router'
import { ReviewRouter } from '../modules/review/review.router'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/subcategories',
    route: SubCategoryRoutes,
  },
  {
    path: '/colors',
    route: ColorRouter,
  },
  {
    path: '/sizes',
    route: SizesRouter,
  },
  {
    path: '/weights',
    route: WeightRouter,
  },
  {
    path: '/tags',
    route: TagsRouter,
  },
  {
    path: '/products',
    route: ProductRouter,
  },
  {
    path: '/add-to-cart',
    route: AddToCartRouter,
  },
  {
    path: '/bookings',
    route: BookingRouter,
  },
  {
    path: '/reviews',
    route: ReviewRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
