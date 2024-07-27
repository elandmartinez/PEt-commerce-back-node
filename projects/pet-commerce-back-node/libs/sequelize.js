const setupModels = require("../models/index")
const { Sequelize } = require("sequelize")

const URI = "mysql://root:admin123@localhost:3306/my_store"
const sequelize = new Sequelize(URI, {
  dialect: "mysql"
})

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize
