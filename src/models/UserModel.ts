import { Model, DataTypes } from 'sequelize'
import sequelize from '@database/index'

class UserModel extends Model { }
UserModel.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' })

export default UserModel
