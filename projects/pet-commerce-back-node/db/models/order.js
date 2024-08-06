const {Model, DataTypes} = require("sequelize")

const ORDER_TABLE_NAME = "orders"
const ORDER_MODEL = "Order"

const orderSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataTypes.INTEGER
  },
  purchaseDate: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "purchase_date"
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cardLastFourNumbers: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "card_last_four_numbers"
  },
  ownerName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "owner_name"
  },
  customerId: {
    allowNull: false,
    type: DataTypes.STRING,
    foreignKey: true,
    field: "client_id"
  },
  productsIds: {
    allowNull: false,
    type: DataTypes.JSON,
    field: "products_ids"
  }
}

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: "Customer"
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE_NAME,
      modelName: ORDER_MODEL,
      timestamp: false
    }
  }
}

module.exports = {
  Order,
  orderSchema
}
