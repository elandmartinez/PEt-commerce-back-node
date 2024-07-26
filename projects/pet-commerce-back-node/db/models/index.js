const { User, userSchema} = require("./UserModel")

function setupModels (sequelize) {
  User.init(userSchema, User.config(sequelize))
}

module.exports = setupModels
