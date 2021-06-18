import { Model, DataTypes } from 'sequelize'
import sequelize from '@database/index'
import ItemModel from '@models/ItemModel'

class ShoppingListModel extends Model { }
ShoppingListModel.init({
  userId: DataTypes.STRING
}, { sequelize, modelName: 'shoppingList' })

ShoppingListModel.hasMany(ItemModel, { foreignKey: 'shoppingListId' })

export default ShoppingListModel
