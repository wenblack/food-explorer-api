import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import ordersController from '../controllers/orders.controller'

const orderRouter = Router()


orderRouter.route('/:user').get(authMiddleware,rescue(ordersController.get))
orderRouter.route('/').get(authMiddleware,rescue(ordersController.index))

export default orderRouter
