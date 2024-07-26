const { Model, DataTypes, Sequelize } = require("sequelize")

const USER_TABLE_NAME = "users"
const MODEL_NAME = "User"

const userSchema = {
  username: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    default: "customer"
  }
}

class User extends Model {
  //this function is to stablish entity relation to another entity
  static associate (models) {

  }

  static config (sequelize) {
    return {
      sequelize,
      tablename: USER_TABLE_NAME,
      modelName: MODEL_NAME,
      timeStamps: false
    }
  }
}

module.exports = {
   userSchema,
   User,
   USER_TABLE_NAME
}
