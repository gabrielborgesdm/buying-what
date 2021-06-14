class User {
  getAll () {
    const all: Array<Object> = [
      {
        id: 1, userId: 1, items: ['First item']
      },
      {
        id: 2, userId: 1, items: ['First item', 'Another item']
      }
    ]

    return all
  }

  store (user: Object) {

  }
}

export default User
