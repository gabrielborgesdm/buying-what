import { Sequelize } from 'sequelize'
import dbConfig from '@config/DatabaseConfig'

export default new Sequelize(dbConfig)
