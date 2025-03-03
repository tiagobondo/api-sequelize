import { Sequelize } from 'sequelize'

const seq = new Sequelize({
  host: 'localhost',
  username: 'root',
  database: 'api-sequileze',
  password: '',
  dialect: 'mysql'
})

export const connection = async () => {
  try {
    await seq.authenticate()
    console.log('Conectado com sucesso!')
  } catch (error) {
    console.log('Erro ao tentar se conectar ao banco de dados', error)
  }
}