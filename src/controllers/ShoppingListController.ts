import ShoppingListModel from '@models/ShoppingListModel'
import UserController from '@controllers/UserController'
import ItemController from '@controllers/ItemController'
import ItemModel from '@models/ItemModel'

const userController = new UserController()
const itemController = new ItemController()

export interface ShoppingListInterface {
  userId: number,
  items: Array<String>
}

class ShoppingListController {
  async getAll () {
    const shoppingLists: any = await ShoppingListModel.findAll({ include: ItemModel })
    shoppingLists.map((shoppingList: any) => itemController.format(shoppingList))
    return shoppingLists
  }

  async get (id: number) {
    const shoppingList: any = await ShoppingListModel.findOne({ where: { id }, include: ItemModel })
    itemController.format(shoppingList)
    return shoppingList
  }

  async remove (id: number) {
    const items = await itemController.remove(id)
    const shoppingList = await this.get(id)
    if (!shoppingList) return
    await shoppingList.destroy()
    shoppingList.items = items
    return shoppingList
  }

  async store (userId: number, items: Array<String>) {
    const user = await userController.get(userId)
    if (!user) return
    const shoppingList: any = await ShoppingListModel.create({ userId })
    if (!shoppingList) return
    shoppingList.items = await itemController.createMany(shoppingList.id, items)
    return shoppingList
  }

  async update (id: number, updateInfo: ShoppingListInterface) {
    const shoppingListFound = await this.get(id)
    const user = await userController.get(updateInfo.userId)
    if (!shoppingListFound || !user) return
    await itemController.remove(id)
    shoppingListFound.update({ userId: updateInfo.userId })
    shoppingListFound.save()
    shoppingListFound.items = await itemController.createMany(id, updateInfo.items)
    return shoppingListFound
  }
}

export default ShoppingListController
