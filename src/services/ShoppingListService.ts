import ShoppingListModel from '@models/ShoppingListModel'
import ItemModel from '@models/ItemModel'
import ItemService from '@services/ItemService'
import UserService from '@services/UserService'

export interface ShoppingListInterface {
  userId: number,
  items: Array<String>
}

const itemService = new ItemService()
const userService = new UserService()

class ShoppingListService {
  async getAll () {
    const shoppingLists: any = await ShoppingListModel.findAll({ include: ItemModel })
    shoppingLists.map((shoppingList: any) => itemService.format(shoppingList))
    return shoppingLists
  }

  async get (id: number) {
    const shoppingList: any = await ShoppingListModel.findOne({ where: { id }, include: ItemModel })
    itemService.format(shoppingList)
    return shoppingList
  }

  async remove (id: number) {
    const items = await itemService.remove(id)
    const shoppingList = await this.get(id)
    if (!shoppingList) return
    await shoppingList.destroy()
    shoppingList.items = items
    return shoppingList
  }

  async store (userId: number, items: Array<String>) {
    const user = await userService.get(userId)
    if (!user) return
    const shoppingList: any = await ShoppingListModel.create({ userId })
    if (!shoppingList) return
    shoppingList.items = await itemService.createMany(shoppingList.id, items)
    return shoppingList
  }

  async update (id: number, updateInfo: ShoppingListInterface) {
    const shoppingListFound = await this.get(id)
    const user = await userService.get(updateInfo.userId)
    if (!shoppingListFound || !user) return
    await itemService.remove(id)
    shoppingListFound.update({ userId: updateInfo.userId })
    shoppingListFound.save()
    shoppingListFound.items = await itemService.createMany(id, updateInfo.items)
    return shoppingListFound
  }
}

export default ShoppingListService