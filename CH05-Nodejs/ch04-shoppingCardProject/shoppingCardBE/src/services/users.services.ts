import databaseService from './dabase.services'
import User from '~/models/schemas/User.schema'

class UsersServices {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    //gọi server và lưu vào
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return result
  }
}

// tạo instance
const usersServices = new UsersServices()

export default usersServices
