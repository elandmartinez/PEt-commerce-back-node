const { Model, Sequelize, DataTypes } = require("sequelize")

const REVIEW_TABLE_NAME = "reviews"
const REVIEW_MODEL = "Review"

const reviewSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING
  },
  score: {
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "product_id"
  }
}

class Review extends Model {
  static associate (models) {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: REVIEW_TABLE_NAME,
      modelName: REVIEW_MODEL,
      timestamp: false
    }
  }
}

module.exports = {reviewSchema, Review}
