import express, { Router } from 'express'
import authRouter from '../routers/auth.router'
import userRouter from '../routers/user.router'
import { UPLOADS_FOLDER } from '../config/upload'
import orderRouter from '../routers/orders.router'
import productRouter from '../routers/product.router'
import searchRouter from '../routers/searchProduct.router'
import categorieRouter from '../routers/categorie.router'

const router = Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use("/files", express.static(UPLOADS_FOLDER))
router.use('/orders', orderRouter)
router.use('/products', productRouter)
router.use('/search', searchRouter)
router.use('/categorie', categorieRouter)

export default router
