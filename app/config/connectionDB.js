import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const seq = new Sequelize({
  host: process.env.HOST,
  username: process.env.USER_NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  dialect: process.env.DIALECT
})

export const connection = async () => {
  try {
    await seq.authenticate()
    console.log('Conectado com sucesso!')
  } catch (error) {
    console.log('Erro ao tentar se conectar ao banco de dados', error)
  }
}