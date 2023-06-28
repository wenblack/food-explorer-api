import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import searchController from '../controllers/search.controller'

const searchRouter = Router()

searchRouter.route("/:name").get(authMiddleware, rescue(searchController.search))


export default searchRouter
