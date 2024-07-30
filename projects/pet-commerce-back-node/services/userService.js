const { models } = require("../libs/sequelize")

class UserService {
  constructor () {}

  async getUsers () {
    try {
      const users = await models.User.findAll()

      return users
    } catch (error) {
      console.error(error)
    }
  }

  async findUser (userId) {
    try {
      const user = await models.User.findByPk(userId)

      return user
    } catch (error) {
      console.error(error)
    }
  }

  async createUser (newUser) {
    try {
      await models.User.create(newUser)
    } catch (error) {
      console.error(error)
    }
  }
  async createUsers (newUsers) {
    try {
      await models.User.bulkCreate(newUsers)
    } catch (error) {
      console.error(error)
    }
  }

  async patchUser (userDataToUpdate, userId) {
    try {
      await models.User.update(userDataToUpdate, { where : {id: userId} })
    } catch (error) {
      console.error(error)
    }
  }

  async deleteUser (userId) {
    try {
      const user = await models.User.findByPk(userId);
      await user.destroy()
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = UserService
