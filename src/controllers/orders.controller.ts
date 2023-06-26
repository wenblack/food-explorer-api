import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'

class OrderController {
  async getByUserId(req: Request, res: Response, next: NextFunction) {
    const orders = await prisma.order.findMany({
      where: { userId: Number(req.params.id) },include:{products:true,}
    })
    const count = await prisma.order.count(
      {
      where: { 
        userId: Number(req.params.id)
      }
    })
    if (orders.length === 0)
      return next({ status: StatusCodes.NOT_FOUND, message: `User don't have a Order.`  })
    res.status(StatusCodes.OK).json({ count, orders })
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
     
  const groupOrders = await prisma.order.findMany({
   
    include:{
      products:true
    }
  })

    res.status(StatusCodes.OK).json({ groupOrders })
  }

 /* async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(res.locals.payload) // just to see the payload
    const { email, password, name, isAdmin } = req.body

    const userEmail = await prisma.user.findUnique({
      where: { email: email }
    })

    const user = await prisma.user.create({
      data: {
        email: email,
        password: bcrypt.hashSync(password, 8),
        name: name,
        isAdmin: false
      }
    })

    if (userEmail) {
      return next({ status: StatusCodes.CONFLICT, message: 'Invali e-mail' })
    }
    else
      res.status(StatusCodes.OK).json({ name: user.name, email: user.email })
  }

  async update(req: Request, res: Response) {
    const { name, email, oldPassword, newPassword } = req.body
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    })

    try {
      if (!user) {
        return (
          res.status(StatusCodes.BAD_REQUEST).json("User not found")
        )
      } else if (oldPassword === undefined && newPassword === undefined) {
        await prisma.user.update({
          where: { id: Number(req.params.id) },
          data: {
            name,
            email,
          }
        })
        return res.json(`User ${user.email} Updated`)
      } else if (oldPassword === undefined || newPassword === undefined) {
        return res.json(`Please inform the new and old Passwords`)
      } else if (oldPassword === newPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json("Current and old password cannot be the same")
      }

      const checkOldPassword = await compare(oldPassword, user.password)
      if (!checkOldPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json("Passwords don't Matching")
      } else {
        await prisma.user.update({
          where: { id: Number(req.params.id) },
          data: {
            password: bcrypt.hashSync(newPassword, 8),
            name,
            email,
          }
        })
        return res.json(`User ${email} Updated`)

      }

    } catch {
      res.status(StatusCodes.CONFLICT).json("Email in use")
    }
  }
*/
}


export default new OrderController()
