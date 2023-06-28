import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import categoriesController from '../controllers/categories.controller'


const categorieRouter = Router()


categorieRouter.route('/:name').get(authMiddleware, rescue(categoriesController.get))

export default categorieRouter
