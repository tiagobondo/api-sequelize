import { DataTypes } from 'sequelize'
import { seq } from '../config/connectionDB.js'

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
    type: DataTypes.STRING,
    allowNUll: false
  },
},
  {
    timestamps: true
  }
)