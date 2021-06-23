import ShoppingListService, { ShoppingListInterface } from '@services/ShoppingListService'
import UserService from '@services/UserService'
import ItemService from '@services/ItemService'
import { ApolloError } from 'apollo-server'
import { NOT_FOUND, HAS_DEPENDENCIES } from '@config/APIConfig'

const shoppingListService = new ShoppingListService()
const userService = new UserService()
const itemService = new ItemService()

class ShoppingListController {
  getAll = async () => await shoppingListService.getAll()

  get = async (id: number) => await shoppingListService.get(id)

  remove = async (id: number) => {
    const items = await itemService.remove(id)
    const shoppingList = await shoppingListService.remove(id)
    if (shoppingList) shoppingList.items = items
    return shoppingList
  }

  store = async (userId: number, items: Array<String>) => {
    if (!await userService.get(userId)) throw new ApolloError(NOT_FOUND.message, NOT_FOUND.code)
    const shoppingList: any = await shoppingListService.store(userId, items)
    if (shoppingList) {
      shoppingList.items = await itemService.createMany(shoppingList.id, items)
    }
    return shoppingList
  }

  update = async (id: number, updateInfo: ShoppingListInterface) => {
    if (!await userService.get(updateInfo.userId)) throw new ApolloError(NOT_FOUND.message, NOT_FOUND.code)
    await itemService.remove(id)
    const shoppingList = await shoppingListService.update(id, updateInfo)
    if (shoppingList) {
      shoppingList.items = await itemService.createMany(id, updateInfo.items)
    }
    return shoppingList
  }
}

export default ShoppingListController
