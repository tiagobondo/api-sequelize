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

  try {
    const data = await User.create({
      userName,
      password
    })
    const response = await data.save()

    if (!response) {
      return res
        .send({ message: 'Erro ao cadastrar!' })
        .status(401)
    } else {
      return res
        .send({ message: 'Sucess!' })
        .status(200)
    }
  } catch (error) {
    return res
      .send({ message: 'Erro interno no servidor', error })
      .status(500)
  }
})

router.get('/users', async (req, res) => {
  const data = await User.findAll({ /*order:[[ 'id','DESC' ]], */ })
  return res
    .send({ data: data })
    .status(200)
})

export default router