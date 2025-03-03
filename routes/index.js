import express from 'express'

import { connection } from '../app/config/connectionDB.js'
import { User } from '../app/models/User.js'

const router = express.Router()
connection()

router.get('/', (req, res) => {
  return res
    .send('Welcome to my Server!')
    .status(200)
})

router.post('/', async (req, res) => {
  const { userName, password } = req.body

  const response = await User.create({
    userName: userName,
    password: password
  })

  //console.log(response instanceof User)
  //console.log(response.userName)

  await response.save()

  return res.send({ message: 'OK' }).status(200)
})

export default router