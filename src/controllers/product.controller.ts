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

  async search(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params
    const result = await prisma.product.findMany({
      where: {
        name: {
          startsWith: name
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

  async createProduct(req: Request, res: Response, next: NextFunction) {
    const { name, description, imgUrl, price } = req.body

    const productName = await prisma.product.findUnique({
      where: { name: name }
    })

    const product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
      }
    })

    if (productName) {
      return next({ status: StatusCodes.CONFLICT, message: 'Product already registered' })
    }
    else
      res.status(StatusCodes.OK).json({ name: product.name, description: product.description })
  }

  /*async update(req: Request, res: Response) {
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
  }*/
}


export default new ProductController()
