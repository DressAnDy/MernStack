import express from 'express'

const userRouter = express.Router()
//setup middlware

userRouter.use(
  (req, res, next) => {
    console.log('Time', Date.now())
    return next()
    res.status(400).send('Not allowrd')
    console.log('ahiihi')
  },
  (res, req, next) => {
    console.log('Time2', Date.now())
    next()
  }
)

userRouter.get('/get-me', (req, res) => {
  res.json({
    data: {
      name: 'Điệp',
      yob: 1999
    }
  })
})

export default userRouter
