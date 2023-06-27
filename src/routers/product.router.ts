import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import productController from '../controllers/product.controller'
import avatarcontroller from '../controllers/avatarcontroller'
import multer from 'multer'
import { Multer } from '../config/upload'


const productRouter = Router()
const upload = multer(Multer)

productRouter.route('/:id').get(authMiddleware,rescue(productController.getDetails))
productRouter.route('/').get(authMiddleware,rescue(productController.getAll))
productRouter.route("/search/:name").get(authMiddleware,rescue(productController.search))
productRouter.route('/image/:id').patch( upload.single('file'), avatarcontroller.update)


export default productRouter
