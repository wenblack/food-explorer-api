import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import ordersController from '../controllers/orders.controller'

const orderRouter = Router()

//orderRouter.route('/:id').get(authMiddleware, rescue(ordersController.getByUserId))
orderRouter.route('/:id').get(rescue(ordersController.getByUserId))
orderRouter.route('/').get(rescue(ordersController.getAll))

export default orderRouter
