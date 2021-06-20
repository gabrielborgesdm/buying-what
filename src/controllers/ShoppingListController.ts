import ShoppingListService, { ShoppingListInterface } from '@services/ShoppingListService'
import UserService from '@services/UserService'

const shoppingListService = new ShoppingListService()
const userService = new UserService()

class ShoppingListController {
  getAll = async () => await shoppingListService.getAll()

  get = async (id: number) => await shoppingListService.get(id)

  remove = async (id: number) => await shoppingListService.remove(id)

  store = async (userId: number, items: Array<String>) => {
    if (!await userService.get(userId)) return
    return await shoppingListService.store(userId, items)
  }

  update = async (id: number, updateInfo: ShoppingListInterface) => {
    if (!await userService.get(updateInfo.userId)) return
    return await shoppingListService.update(id, updateInfo)
  }
}

export default ShoppingListController
