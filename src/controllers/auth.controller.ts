import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../lib/prisma';
import jwt from '../utils/jwt';

class AuthController {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return next({
        status: StatusCodes.BAD_REQUEST,
        message: 'Alguns campos obrigatórios não foram preenchidos',
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: 'Usuário não localizado',
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return next({
        status: StatusCodes.UNAUTHORIZED,
        message: 'Senha inválida',
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email });
    const {isAdmin , id, email:userName } = user 

    res.status(StatusCodes.OK).json({ id,  userName, token , isAdmin });
  }
}

export default new AuthController();
