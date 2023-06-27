import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import ordersController from '../controllers/orders.controller'

const orderRouter = Router()


orderRouter.route('/:user').get(authMiddleware,rescue(ordersController.getByUserId))
orderRouter.route('/').get(authMiddleware,rescue(ordersController.getAll))

export default orderRouter
