import { Router } from 'express'
import rescue from 'express-rescue'
import userController from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth'


const userRouter = Router()

userRouter.route('/:id').get(authMiddleware, rescue(userController.getById))
userRouter.route('/create').post(authMiddleware,rescue(userController.createUser))
userRouter.route('/edit/:id').patch(authMiddleware, userController.update)



export default userRouter
