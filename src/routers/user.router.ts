import { Router } from 'express'
import rescue from 'express-rescue'
import userController from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth'

const userRouter = Router()

userRouter.route('/create').post(authMiddleware, rescue(userController.create))

export default userRouter
