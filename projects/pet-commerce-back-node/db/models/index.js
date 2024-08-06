const { User, userSchema} = require("./user")
const { Product, productSchema } = require("./product")
const { Order, orderSchema } = require("./order")
const { Customer, customerSchema } = require("./customer")
const { Review, reviewSchema } = require("./review")

function setupModels (sequelize) {
  User.init(userSchema, User.config(sequelize))
  Product.init(productSchema, Product.config(sequelize))
  Order.init(orderSchema, Order.config(sequelize))
  Customer.init(customerSchema, Customer.config(sequelize))
  Review.init(reviewSchema, Review.config(sequelize))
}

module.exports = setupModels
