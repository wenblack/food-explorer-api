import express, { Router } from 'express'
import authRouter from '../routers/auth.router'
import userRouter from '../routers/user.router'
import { UPLOADS_FOLDER } from '../config/upload'

const router = Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use("/files", express.static(UPLOADS_FOLDER))

export default router
