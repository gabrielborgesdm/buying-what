import { Model, DataTypes } from 'sequelize'
import sequelize from '@database/index'
import ItemModel from '@models/ItemModel'

export interface ShoppingListAttributes {
  id?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  items?: Array<String>
}

class ShoppingListModel extends Model { }
ShoppingListModel.init({
  userId: DataTypes.NUMBER
}, { sequelize, modelName: 'shoppingList' })

ShoppingListModel.hasMany(ItemModel, { foreignKey: 'shoppingListId' })

export default ShoppingListModel
