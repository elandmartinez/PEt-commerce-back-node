const { models } = require("../libs/sequelize")
const hashPassword = require("../utils/hooks/hashPassword")

class CustomerService {
  constructor () {}

  async getCustomers () {
    try {
      const customers = await models.Customer.findAll()

      return customers
    } catch (error) {
      console.error(error)
    }
  }

  async findCustomer (customerId) {
    try {
      const customer = await models.Customer.findByPk(customerId)

      delete customer.password

      return customer
    } catch (error) {
      console.error(error)
    }
  }

  async checkIfCustomerExists (customerId) {
    try {
      const customers = models.User.findAll()
      const customerToFind = customers.find(customer => customer.id = customerId)

      if(customerToFind) return true

      throw new Error(`Could not find a customer with the id ${customerId}`)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async createCustomer (newCustomer) {
    const hashedCustomerPassword = hashPassword(newCustomer.password)
    newCustomer.password = hashedCustomerPassword
    try {
      await models.Customer.create(newCustomer)
    } catch (error) {
      console.error(error)
    }
  }
  async createCustomers (newCustomers) {
    newCustomers = newCustomers.map(customer => {
      const hashedCustomerPassword = hashPassword(customer.password)
      return {
        ...customer,
        password: hashedCustomerPassword
      }
    })
    try {
      await models.Customer.bulkCreate(newCustomers)
    } catch (error) {
      console.error(error)
    }
  }

  async patchCustomer (customerDataToUpdate, customerId) {
    try {
      await models.Customer.update(customerDataToUpdate, { where : {id: customerId} })
    } catch (error) {
      console.error(error)
    }
  }

  async deleteCustomer (customerId) {
    try {
      const customer = await models.Customer.findByPk(customerId);
      await customer.destroy()
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = CustomerService
