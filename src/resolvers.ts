import UserController, { UserInterface } from '@controllers/UserController'
import ShoppintListController from '@controllers/ShoppingListController'

const user = new UserController()
const shoppingList = new ShoppintListController()

export default {
  Query: {
    users: () => user.getAll(),
    user: (_: any, { id }) => user.get(id),

    shoppingList: (_: any, { id }) => shoppingList.get(id),
    shoppingLists: (_: any, { id }) => shoppingList.getAll()
  },
  Mutation: {
    createShoppingList: (_: any, { userId, items }) => shoppingList.store(userId, items),
    deleteShoppingList: (_: any, { id }) => shoppingList.remove(id),
    updateShoppingList: (_: any, { id, userId, items }) => shoppingList.update(id, { userId, items }),

    createUser: (_: any, userData: UserInterface) => user.store(userData),
    deleteUser: (_: any, { id }) => user.remove(id),
    updateUser: (_: any, { id, email, password }) => user.update(id, { email, password })
  }
}
