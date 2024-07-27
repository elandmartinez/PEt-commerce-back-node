const { models } = require("../libs/sequelize")

class UserService {
  constructor () {}

  async createUser (newUser) {
    try {
      await models.User.create(newUser)
    } catch (error) {
      throw new Error("Error while creating the user: ", error)
    }
  }

  async getUsers () {
    try {
      const users = await models.User.findAll()

      return users
    } catch (error) {
      throw new Error("Error while getting users: ", error)
    }
  }

  async updateUser (newUserUpdate) {
    try {
      await models.User.update(newUserUpdate)
    } catch (error) {
      throw new Error("Error while updating the user: ", error)
    }
  }

  async deleteUser (userId) {
    try {
      const user = models.User.findOne(userId);
      (await user).destroy()
    } catch (error) {
      throw new Error ("Error while deleting the user: ", error)
    }
  }

}

module.exports = UserService
