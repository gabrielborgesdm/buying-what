import UserModel from '@models/UserModel'

export interface UserInterface {
  email: String,
  password: String
}

class UserService {
  async getAll () {
    const usersResponse = await UserModel.findAll()
    return usersResponse
  }

  async get (id: number) {
    return await UserModel.findOne({ where: { id } })
  }

  async remove (id: number) {
    const userResponse = await this.get(id)
    if (userResponse) {
      await userResponse.destroy()
    }
    return userResponse
  }

  async store (user: UserInterface) {
    const { email, password } = user
    const userResponse = await UserModel.create({ email, password })
    return userResponse
  }

  async update (id: number, updateInfo: UserInterface) {
    const userFound = await this.get(id)
    if (userFound) {
      userFound.update(updateInfo)
      userFound.save()
    }

    return userFound
  }
}

export default UserService
