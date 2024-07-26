const UserModel = require("../db/models/UserModel")
const { Sequelize } = require("sequelize")

const URI = "mysql://root:admin123@localhost:8081/my_store"
const sequelize = new Sequelize("mysql", "root", "admin123",{
  host: "localhost",
  dialect: "mysql"
})

const db = {}

db.sequelize = sequelize
db.models = {}
db.models.User = UserModel(sequelize, Sequelize.DataTypes)

module.exports = db
