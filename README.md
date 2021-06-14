# buying-what
"Buying what" is a shopping list app made to exercise GraphQL and Sequelize in a Node.js API



# Installation

1. Run `yarn install` to install all the packages
2. Rename the *.env.example* file to .env and update its data according to your config
3. Run `yarn sequelize db:create` to create your database
3.1 In case you wanna create a migration you can run `yarn sequelize migration:create --name=migration-name`
4. Run `yarn sequelize db:migrate` to migrate your database