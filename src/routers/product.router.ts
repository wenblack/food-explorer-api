import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import productController from '../controllers/product.controller'
const productRouter = Router()

//productRouter.route('/:id').get(authMiddleware, rescue(productController.getByUserId))
productRouter.route('/:id').get(rescue(productController.getDetails))
productRouter.route('/').get(rescue(productController.getAll))

export default productRouter
