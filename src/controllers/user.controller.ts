import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'
import bcrypt, { compare } from 'bcryptjs'

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return next({
        status: StatusCodes.BAD_REQUEST,
        message: 'Some required fields are missing',
      })
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (user) {
      return next({
        status: StatusCodes.CONFLICT,
        message: 'Email already registered',
      })
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 8),
      }
    })

    res.status(StatusCodes.OK).json({ newUser })
  }
}


export default new UserController()
