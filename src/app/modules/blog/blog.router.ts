import express from 'express'
import { BlogController } from './blog.controller'

const router = express.Router()

router.post('/', BlogController.createBlog)
router.get('/', BlogController.allBlog)
router.get('/:id', BlogController.singleBlog)
router.patch('/:id', BlogController.updateBlog)
router.post('/:id', BlogController.deleteBlog)

export const BlogRouter = router
