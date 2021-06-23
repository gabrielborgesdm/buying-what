import ItemModel from '@models/ItemModel'

class ItemService {
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

export default ItemService
