import prisma from "../lib/prisma"
import { StatusCodes } from "http-status-codes"
import { DiskStorage } from "../providers/DiskStorage"


class ProductImageController {
 async update(req: any, res: any) {
    const avatarFilename = req.file.filename
    const {id} = req.params    
    console.log(avatarFilename)
    const diskStorage = new DiskStorage()

    const product = await prisma.product.findUnique({
      where: { id: id}
    })

    if (!product) {
      return (
        res.status(StatusCodes.BAD_REQUEST).json("Product not found")
      )
    }
    if (product.imgUrl) {
      await diskStorage.deletFile(String(avatarFilename))
    }
    const filename = await diskStorage.saveFile(String(avatarFilename))
    product.imgUrl = filename

    await prisma.product.update({
     where: { id: id},
      data: {
        imgUrl: product.imgUrl
      }
    })

    res.status(StatusCodes.ACCEPTED).json({ newImage: product.imgUrl })
  }

}
export default new ProductImageController()