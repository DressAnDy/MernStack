//import các interface của express để sử dụng cho việc định nghĩa
import { Request, Response, NextFunction } from 'express'

//middlewares là một handle có nhiệm vụ kiểm tra các giá trị
//mà người dùng gửi lên server
//nếu mà kiểm tra thành công thì mình next()
//còn mà không oke thì mình res.json

//Nếu người dùng muốn login(đăng nhập)
//họ gửi req bao gồm email + password lên server
//req này phải đi qua middlewars này trước

//vậy middlewares này sẽ chạy khi người dùng muốn login
//và middlewares này sẽ kiểm tra email và password

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  next()
}
