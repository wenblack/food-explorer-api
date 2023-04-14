import { NextFunction, Router } from 'express'
import rescue from 'express-rescue'
import userController from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth'
import prisma from '../lib/prisma'
import error from '../middlewares/error'

const userRouter = Router()

userRouter.route('/:id').get(authMiddleware, rescue(userController.getById))
userRouter.route('/create').post(rescue(userController.createUser))


export default userRouter
