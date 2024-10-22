import express from 'express'
import { loginController, registerController } from '~/Controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'

const userRouter = express.Router()
//setup middlware
// /users/login

userRouter.post('/login', loginValidator, loginController)

//Chức năng đăng ký
userRouter.post('/register', registerController)

export default userRouter
