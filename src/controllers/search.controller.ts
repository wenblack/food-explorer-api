import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'

class SearchProductController {
  async get(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params

    const result = await prisma.product.findMany({
      where: {
        name: {
          contains: String(name)
        }
      },
      select: {
        id: true,
        name: true,
        description: true,
        imgUrl: true,
        price: true
      }
    })
    const count = result.length

    if (count === 0 || null)
      return next({ status: StatusCodes.NOT_FOUND, message: `Não encontramos nenhum produto com esse nome` })


    res.status(StatusCodes.OK).json({ total: count, result: result })
  }
}


export default new SearchProductController()
