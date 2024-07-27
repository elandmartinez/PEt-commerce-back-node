const { models } = require("../libs/sequelize")

class OrderService {
  constructor () {}

  async createOrder (newOrder) {
    try {
      await models.Order.create(newOrder)
    } catch (error) {
      throw new Error("Error while creating the Order: ", error)
    }
  }

  async getOrder () {
    try {
      const orders = await models.Order.findAll()

      return orders
    } catch (error) {
      throw new Error("Error while getting orders: ", error)
    }
  }

  async updateOrder (newOrderUpdate) {
    try {
      await models.Order.update(newOrderUpdate)
    } catch (error) {
      throw new Error("Error while updating the order: ", error)
    }
  }

  async deleteOrder (orderId) {
    try {
      const order = models.Order.findOne(orderId);
      (await order).destroy()
    } catch (error) {
      throw new Error ("Error while deleting the order: ", error)
    }
  }

}

module.exports = UserService
