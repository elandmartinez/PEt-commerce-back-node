const {Model, DataTypes} = require("sequelize")

const CUSTOMER_TABLE_NAME = "customers"
const CUSTOMER_MODEL = "Customer"

const customerSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phoneNumber: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    field: "phone_number"
  },
  countryCode: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "country_code"
  },
}

class Customer extends Model {
  static associate(sequelize) {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE_NAME,
      modelName: CUSTOMER_MODEL,
      timestamp: false
    }
  }
}

module.exports = {
  Customer,
  customerSchema
}
