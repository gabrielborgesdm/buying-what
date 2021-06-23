export default class ShoppingListHelpers {
  formatItems (shoppingList: any) {
    if (!shoppingList) return
    const items = shoppingList.items.map((item: any) => item.description)
    shoppingList.items = items
  }
}
