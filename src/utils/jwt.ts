import 'dotenv/config'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET_KEY || 'secret'


interface IPayload {
  id: string
  email: string
}

export default {
  sign: (payload: IPayload) =>
    jwt.sign(payload, SECRET, { expiresIn: '1d', algorithm: 'HS256' }),

  verify: (token: string) => jwt.verify(token, SECRET),
}
