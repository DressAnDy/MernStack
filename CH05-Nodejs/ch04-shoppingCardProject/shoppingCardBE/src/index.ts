import express from 'express'
import userRouter from './users.routers'

const app = express()
const PORT = 3000

//dựng userRouter

//server dùng userRouter
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log('Server BE đang chạy ở PORT: ' + PORT)
})
