import UserService, { UserInterface } from '@services/UserService'

const userService = new UserService()

class UserController {
  getAll = async () => await userService.getAll()
  get = async (id: number) => await userService.get(id)
  remove = async (id: number) => await userService.remove(id)
  store = async (user: UserInterface) => await userService.store(user)
  update = async (id: number, updateInfo: UserInterface) => await userService.update(id, updateInfo)
}

export default UserController
