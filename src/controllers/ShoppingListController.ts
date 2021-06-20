import ShoppingListService, { ShoppingListInterface } from '@services/ShoppingListService'

const shoppingListService = new ShoppingListService()

class ShoppingListController {
  getAll = async () => await shoppingListService.getAll()
  get = async (id: number) => await shoppingListService.get(id)
  remove = async (id: number) => await shoppingListService.remove(id)
  store = async (userId: number, items: Array<String>) => await shoppingListService.store(userId, items)
  update = async (id: number, updateInfo: ShoppingListInterface) => await shoppingListService.update(id, updateInfo)
}

export default ShoppingListController
