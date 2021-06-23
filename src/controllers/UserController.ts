import UserService, { UserInterface } from '@services/UserService'
import ShoppingListService from '@services/ShoppingListService'
import { ApolloError } from 'apollo-server'
import { NOT_FOUND, HAS_DEPENDENCIES } from '@config/APIConfig'

const userService = new UserService()
const shoppingListService = new ShoppingListService()

class UserController {
  getAll = async () => await userService.getAll()

  get = async (id: number) => await userService.get(id)

  remove = async (id: number) => {
    if (await shoppingListService.countByUserId(id) > 0) {
      throw new ApolloError(HAS_DEPENDENCIES.message, HAS_DEPENDENCIES.code)
    }
    return await userService.remove(id)
  }

  store = async (user: UserInterface) => await userService.store(user)

  update = async (id: number, updateInfo: UserInterface) => {
    if (!await userService.get(id)) {
      throw new ApolloError(NOT_FOUND.message, NOT_FOUND.code)
    }
    await userService.update(id, updateInfo)
  }
}

export default UserController
