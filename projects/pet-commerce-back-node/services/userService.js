const { models } = require("../libs/sequelize")
const hashPassword = require("../utils/hooks/hashPassword")

class UserService {
  constructor () {}

  async getUsers () {
    try {
      const users = await models.User.findAll()

      return users
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async findUserByEmail (email) {
    try {
      const user = await models.User.findOne({where: {email: email}})

      return user
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async findUser (userId) {
    try {
      const user = await models.User.findByPk(userId)

      return user
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async createUser (newUser) {
    const hashedCustomerPassword = await hashPassword(newUser.password)
    newUser.password = hashedCustomerPassword
    try {
      await models.User.create(newUser)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
  async createUsers (newUsers) {
    try {
      await models.User.bulkCreate(newUsers)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async patchUser (userDataToUpdate, userId) {
    try {
      await models.User.update(userDataToUpdate, { where : {id: userId} })
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  async deleteUser (userId) {
    try {
      const user = await models.User.findByPk(userId);
      await user.destroy()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

}

module.exports = UserService
