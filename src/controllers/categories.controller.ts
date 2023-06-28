import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'

class CategoriesController {
  async get(req: Request, res: Response, next: NextFunction) {
    const product = await prisma.categorie.findUnique({
      where: {
        name: req.params.name
      },select:{
        name: false,
        products:true,
      }
    })
    
    const total = Number(product?.products.length)

    if (total === 0)
      return next({ status: StatusCodes.NOT_FOUND, message: `Produto não encontrado` })
    res.status(StatusCodes.OK).json({ result:product })
  }

}

export default new CategoriesController()
