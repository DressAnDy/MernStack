import express from 'express'
import userRouter from './routes/users.routers'
import databaseService from './services/dabase.services'

const app = express()
const PORT = 4000
databaseService.connect()
//Cho server chạy middlewares chuyển json
app.use(express.json()) //Kết nối database
//dựng userRouter

//server dùng userRouter
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log('Server BE đang chạy ở PORT: ' + PORT)
})
