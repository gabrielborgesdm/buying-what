import ItemService from '@services/ItemService'

const itemService = new ItemService()

class ItemController {
  format = (shoppingList: any) => itemService.format(shoppingList)
  remove = async (shoppingListId: number) => await itemService.remove(shoppingListId)
  createMany = async (shoppingListId: number, items: Array<String>) => await itemService.createMany(shoppingListId, items)
}

export default ItemController
