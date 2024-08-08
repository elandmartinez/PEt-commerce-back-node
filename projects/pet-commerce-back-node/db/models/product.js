const {Model, DataTypes} = require("sequelize")

const PRODUCT_TABLE_NAME = "products"
const PRODUCT_MODEL = "Product"

const productSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dimensions: {
    allowNull: false,
    type: DataTypes.STRING
  },
  provider: {
    allowNull: false,
    type: DataTypes.STRING
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  imageUrl: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "image_url"
  },
  expirationDate: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "expiration_date"
  },
  elaborationDate: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "elaboration_date"
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}

class Product extends Model {
  static associate(sequelize) {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE_NAME,
      modelName: PRODUCT_MODEL,
      timestamp: false
    }
  }
}

module.exports = {
  Product,
  productSchema
}
