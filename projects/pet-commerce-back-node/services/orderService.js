const { models } = require("../libs/sequelize")

class OrderService {
  constructor () {}

  async createOrder (newOrder) {
    try {
      await models.Order.create(newOrder)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async createOrders (newOrders) {
    try {
      await models.User.bulkCreate(newOrders)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async getOrders () {
    try {
      const orders = await models.Order.findAll()

      return orders
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async getByCustomerEmail (customerEmail) {
    try {
      const clientOrders = await models.Order.findAll({where: { customerId: customerEmail}})
       return clientOrders
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }

  }

  async findOrder (orderId) {
    try {
      const order = await models.Order.findByPk(orderId)

      return order
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async patchOrder (newOrderDataUpdate, orderId) {
    try {
      await models.Order.update(newOrderDataUpdate, {where: {id: orderId}})
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async deleteOrder (orderId) {
    try {
      const order = models.Order.findOne(orderId);
      (await order).destroy()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

}

module.exports = OrderService
