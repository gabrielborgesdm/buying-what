import ItemModel from '@models/ItemModel'

class ItemsController {
  format (shoppingList: any) {
    if (!shoppingList) return
    const items = shoppingList.items.map((item: any) => item.description)
    shoppingList.items = items
  }

  async remove (shoppingListId: number) {
    const formattedItems = []
    const items: any = await ItemModel.findAll({ where: { shoppingListId } })
    if (!items) return []
    for (const item of items) {
      formattedItems.push(item.description)
      await item.destroy()
    }
    return formattedItems
  }

  async createMany (shoppingListId: number, items: Array<String>) {
    for (const item of items) {
      await ItemModel.create({ shoppingListId, description: item })
    }
    return items
  }
}

export default ItemsController
