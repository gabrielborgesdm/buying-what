import { Model, DataType, DataTypes } from 'sequelize'
import sequelize from "@database/index"

class User extends Model { }
User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, { sequelize, modelName: 'User' })

export default User