import UserService, { UserInterface } from '@services/UserService'
import ShoppingListService from '@services/ShoppingListService'

const userService = new UserService()
const shoppingListService = new ShoppingListService()

class UserController {
  getAll = async () => await userService.getAll()

  get = async (id: number) => await userService.get(id)

  remove = async (id: number) => {
    if (await shoppingListService.countByUserId(id) > 0) return
    return await userService.remove(id)
  }

  store = async (user: UserInterface) => await userService.store(user)

  update = async (id: number, updateInfo: UserInterface) => await userService.update(id, updateInfo)
}

export default UserController
