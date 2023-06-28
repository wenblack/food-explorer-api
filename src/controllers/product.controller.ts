import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import prisma from '../lib/prisma'

class ProductController {
  async getDetails(req: Request, res: Response, next: NextFunction) {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      }, select: {
        id: true,
        name: true,
        description: true,
        imgUrl: true,
        price: true
      }
    })

    if (product?.name === '' || null)
      return next({ status: StatusCodes.NOT_FOUND, message: `Produto não encontrado` })
    res.status(StatusCodes.OK).json({ product })
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    const groupOrders = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        imgUrl: true,
        price: true
      }
    })
    const count = groupOrders.length

    res.status(StatusCodes.OK).json({ total: count, products: groupOrders })
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    const { name, description, price, imgUrl } = req.body

    if (!name || !description || !price) {
      return next({
        status: StatusCodes.BAD_REQUEST,
        message: 'Some required fields are missing',
      })
    }

    const product = await prisma.product.findUnique({ where: { name } })

    if (product) {
      return next({
        status: StatusCodes.CONFLICT,
        message: 'Product already registered',
      })
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imgUrl
      }
    })

    res.status(StatusCodes.OK).json({ newProduct })
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body

    const product = await prisma.product.findUnique({ where: { name } })

    if (!product) {
      return next({
        status: StatusCodes.CONFLICT,
        message: 'Produto Não encontrado',
      })
    }

    const deletedProduct = await prisma.product.delete({
      where: { name }
    })

    res.status(StatusCodes.OK).json({ message: `Produto ${deletedProduct.name} deletado!` })
  }


  async update(req: Request, res: Response) {
    const { name, newName, newDescription, newPrice } = req.body


    const product = await prisma.product.findUnique({
      where: { name }
    })

    if (!product) {
      return (
        res.status(StatusCodes.BAD_REQUEST).json("Produto não encontrado")
      )
    }

    if (!newName && !newDescription && !newPrice) {
      return (
        res.status(StatusCodes.BAD_REQUEST).json({ message: "Informe pelo menos um campo para alterar" })
      )
    }
    const updatedProduct = await prisma.product.update({
      where: { name },
      data: {
        name: newName,
        description: newDescription,
        price: newPrice
      }
    })
    return (res.status(StatusCodes.OK).json(updatedProduct))
  }
}

export default new ProductController()
