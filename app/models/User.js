import { Sequelize, DataTypes } from 'sequelize'

const seq = new Sequelize({
  host: 'localhost',
  username: 'root',
  database: 'api-sequileze',
  password: '',
  dialect: 'mysql'
})

export const User = seq.define('User', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING
  },
},

  {
    timestamps: false
  }
)