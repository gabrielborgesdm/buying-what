import { Model, DataTypes } from 'sequelize'
import sequelize from '@database/index'

class ItemModel extends Model { }

ItemModel.init({
  shoppingListId: DataTypes.INTEGER,
  description: DataTypes.STRING
}, { sequelize, modelName: 'items' })

export default ItemModel
