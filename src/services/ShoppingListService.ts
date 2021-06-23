import ShoppingListModel from '@models/ShoppingListModel'
import ItemModel from '@models/ItemModel'
import ShoppingListHelpers from '@helpers/ShoppingListHelpers'

export interface ShoppingListInterface {
  userId: number,
  items: Array<String>
}

class ShoppingListService extends ShoppingListHelpers {
  async getAll () {
    const shoppingLists: any = await ShoppingListModel.findAll({ include: ItemModel })
    shoppingLists.map((shoppingList: any) => this.formatItems(shoppingList))
    return shoppingLists
  }

  async countByUserId (userId: number) {
    return await ShoppingListModel.count({ where: { userId }, include: ItemModel })
  }

  async get (id: number) {
    const shoppingList: any = await ShoppingListModel.findOne({ where: { id }, include: ItemModel })
    this.formatItems(shoppingList)
    return shoppingList
  }

  async remove (id: number) {
    const shoppingList = await this.get(id)
    if (!shoppingList) return
    await shoppingList.destroy()
    return shoppingList
  }

  async store (userId: number, items: Array<String>) {
    return await ShoppingListModel.create({ userId })
  }

  async update (id: number, updateInfo: ShoppingListInterface) {
    const shoppingListFound = await this.get(id)
    if (!shoppingListFound) return
    shoppingListFound.update({ userId: updateInfo.userId })
    shoppingListFound.save()
    return shoppingListFound
  }
}

export default ShoppingListService
