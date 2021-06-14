import User from '@controllers/UserController'

const user = new User()

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
    shoppingLists: () => user.getAll(),
    // eslint-disable-next-line eqeqeq
    shoppingList: (_: any, { id }) => shoppingLists.filter(list => list.id == id)[0]
  },
  Mutation: {
    createShoppingList: () => shoppingLists[1],
    createUser: (_: any, userData: Object) => user.store(userData)
  }
}
