import prisma from "../lib/prisma"
import { StatusCodes } from "http-status-codes"
import { DiskStorage } from "../providers/DiskStorage"


class UserAvatarController {
  async update(req: any, res: any) {
    const avatarFilename = req.file.filename
    console.log(avatarFilename)
    const diskStorage = new DiskStorage()

    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    })

    if (!user) {
      return (
        res.status(StatusCodes.BAD_REQUEST).json("User not found")
      )
    }
    if (user.avatarUls) {
      await diskStorage.deletFile(String(avatarFilename))
    }
    const filename = await diskStorage.saveFile(String(avatarFilename))
    user.avatarUls = filename

    await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: {
        avatarUls: user.avatarUls
      }
    })

    res.json(user)
  }

}

export default new UserAvatarController()