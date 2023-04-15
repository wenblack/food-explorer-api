import { Router } from 'express'
import rescue from 'express-rescue'
import userController from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth'
import multer from 'multer'
import { Multer } from '../config/upload'
import avatarcontroller from '../controllers/avatarcontroller'

const userRouter = Router()
const upload = multer(Multer)

userRouter.route('/:id').get(authMiddleware, rescue(userController.getById))
userRouter.route('/create').post(rescue(userController.createUser))
userRouter.route('/avatar/:id').patch(authMiddleware, upload.single('avatar'), avatarcontroller.update)

export default userRouter
