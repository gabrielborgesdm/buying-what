
# Buying What

It's an API that was created in order to learn GraphQL and Sequelize in Node.JS with a propper MVCS architecture. It allows you to create Users, Shopping Lists and Items for each list.


## Screenshots
#### Entity Relationship Diagram
![Entity Relationship Diagram](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### GraphQL Docs
![GraphQL Docs](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## Lessons Learned

I started developing this project not only because I wanted to learn Sequelize and GraphQL but also because I wanted to practice building a clean MVC architecture following the S.O.L.I.D. principles. 

While developing the project, I got to the conclusion that pure MVC wasn’t exactly what I was looking for. Since I wanted reusable code, I would have a problem importing one Controller into another because of Circular Dependency.

That’s when Model View Controller Service (M.V.C.S.), comes into play. With this architecture I can import Services inside of Controllers, having everything I need to make request validations. Also, with this architecture your code gets to be pretty clean and straightfoward.  
## Documentation

[Documentation](https://documenter.getpostman.com/view/6190871/TzeajmTX)

  
## Installation 

Install my-project with npm

1. Run the following command to install all the packages
```bash
yarn sequelize migration:create --name=migration-name
```
2. Rename the *.env.example* file to .env and update its data according to your config
```bash
DB_HOST=localhost
DB_USERNAME=admin
DB_PASSWORD=root
DB_DATABASE=buying_what
```
3. Run the next one to create your database
```bash
yarn sequelize db:create
```
4. Then, to migrate your database
```bash
yarn sequelize db:migrate
```
5. In case you want to create new migrations you can run 
```bash
yarn sequelize migration:create --name=migration-name
```

## Schema

```graphql
#
type Query {
  #
  shoppingLists: [ShoppingList!]!

  #
  shoppingList(id: ID!): ShoppingList

  #
  user(id: ID!): User

  #
  users: [User!]!
}

#
type ShoppingList {
  #
  id: ID!

  #
  userId: ID!

  #
  items: [String!]
}

#
type User {
  #
  id: ID!

  #
  email: String!

  #
  password: String!
}

#
type Mutation {
  #
  createShoppingList(userId: Int!, items: [String!]!): ShoppingList

  #
  deleteShoppingList(id: Int!): ShoppingList

  #
  updateShoppingList(id: Int!, userId: Int!, items: [String!]!): ShoppingList

  #
  createUser(email: String!, password: String!): User

  #
  updateUser(id: Int!, email: String!, password: String!): User

  #
  deleteUser(id: Int!): User
}
```

  