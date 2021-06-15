import UserController, { UserInterface } from '@controllers/UserController'

const user = new UserController()

const shoppingLists = [
  {
    id: 1, userId: 1, items: ['First item']
  },
  {
    id: 2, userId: 1, items: ['First item', 'Another item']
  }
]

export default {
  Query: {
    shoppingLists: () => [],
    // eslint-disable-next-line eqeqeq
    shoppingList: (_: any, { id }) => shoppingLists.filter(list => list.id == id)[0],
    users: () => user.getAll(),
    user: (_: any, { id }) => user.get(id)
  },
  Mutation: {
    createShoppingList: () => shoppingLists[1],
    createUser: (_: any, userData: UserInterface) => user.store(userData),
    deleteUser: (_: any, { id }) => user.remove(id),
    updateUser: (_: any, { id, email, password }) => user.update(id, { email, password })
  }
}
