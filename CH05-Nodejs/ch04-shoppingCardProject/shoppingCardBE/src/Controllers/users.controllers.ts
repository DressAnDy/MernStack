import { Request, Response } from 'express'
import usersServices from '~/services/users.services'
// controller là handle có nhiệm vụ xử lý logic các thông tin khi đã vào controller thì phải clean
//

export const loginController = (req: Request, res: Response) => {
  // vào đây là k kiểm tra dữ liệu nữa, chỉ còn dùng thôi
  const { email, password } = req.body
  //vào database kiểm tra xem đúng hay không
  // xà lơ
  if (email === 'lehodiep.1999@gmail.com' && password === 'weArePiedTeam') {
    res.status(200).json({
      message: 'login success',
      data: {
        fname: 'Điệp',
        age: 1999
      }
    })
  } else {
    res.status(400).json({
      message: 'invalid email or password'
    })
  }
}

//Nhận vào thông tin đăng ký của người dùng vào database để tạo user lưu vào
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    //vào database và nhét vào collections users
    const result = await usersServices.register({ email, password })
    res.status(200).json({
      message: 'Register',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
