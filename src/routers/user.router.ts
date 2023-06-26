import { Router } from 'express'
import rescue from 'express-rescue'
import userController from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth'
import multer from 'multer'
import { Multer } from '../config/upload'
import avatarcontroller from '../controllers/avatarcontroller'

const userRouter = Router()
const upload = multer(Multer)

//userRouter.route('/:id').get(authMiddleware, rescue(userController.getById))
//userRouter.route('/avatar/:id').patch(authMiddleware, upload.single('avatar'), avatarcontroller.update)
//userRouter.route('/edit/:id').patch(authMiddleware, userController.update)

userRouter.route('/:id').get(rescue(userController.getById))
//userRouter.route('/avatar/:id').patch( upload.single('avatar'), avatarcontroller.update)
userRouter.route('/create').post(rescue(userController.createUser))
userRouter.route('/edit/:id').patch( userController.update)

export default userRouter
