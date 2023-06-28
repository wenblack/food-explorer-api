import { Router } from 'express'
import rescue from 'express-rescue'
import authMiddleware from '../middlewares/auth'
import productController from '../controllers/product.controller'
import avatarcontroller from '../controllers/avatarcontroller'
import multer from 'multer'
import { Multer } from '../config/upload'


const productRouter = Router()
const upload = multer(Multer)

productRouter.route('/:id').get(authMiddleware, rescue(productController.getDetails))
productRouter.route('/').get(authMiddleware, rescue(productController.getAll))
productRouter.route('/create').post(authMiddleware, rescue(productController.createProduct))
productRouter.route('/image/:id').patch(upload.single('file'), avatarcontroller.update)
productRouter.route('/delete/').patch(authMiddleware, rescue(productController.delete))
productRouter.route('/update').post(authMiddleware, productController.update)

export default productRouter
