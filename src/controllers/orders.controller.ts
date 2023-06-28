import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'

class OrderController {
  async get(req: Request, res: Response, next: NextFunction) {
    const orders = await prisma.order.findMany({
      where: {
        user: String(req.params.user),
      }, select: {
        productname: true,
        amount: true,
      }

    })
    if (orders.length === 0)
      return next({ status: StatusCodes.NOT_FOUND, message: `Você ainda não tem pedidos` })
    res.status(StatusCodes.OK).json({ orders })
  }

  async index(req: Request, res: Response, next: NextFunction) {
    const groupOrders = await prisma.order.groupBy({
      by: ['id', 'user', 'amount', 'createdAt', 'product', 'status'],
      orderBy: { createdAt: 'asc' }
    })

    res.status(StatusCodes.OK).json({ orders: groupOrders })
  }
}

export default new OrderController()
