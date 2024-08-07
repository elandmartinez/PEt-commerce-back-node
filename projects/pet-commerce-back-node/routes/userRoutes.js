const express = require("express")
const UserService = require("../services/userService")
const authenticateToken = require("../middlewares/authenticateToken")
const validateRoles = require("../middlewares/validateRoles")
const validationSchemaHandler = require("../middlewares/validationSchemaHandler")
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema
} = require("../schemas/userSchemas")

const router = express.Router()
const userService = new UserService()

router.get("/get",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({
      message: "Users obtained!",
      body: users
    })
  } catch (error) {
    console.error(error)
  }
})

router.get("/get/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(getUserSchema, "params"),
  async (req, res) => {
  const { id } =(req.params)
  try {
    const user = await userService.findUser(parseInt(id))

    return res.status(200).json({
      message: "User obtained!",
      body: user
    })
  } catch (error) {
    console.error(error)
  }
})

router.post("/post-user",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(createUserSchema, "body"),
  async (req, res) => {
  try {
    const userData = req.body
    await userService.createUser(userData)

    return res.status(200).json({
      message: "User created!"
    })

  } catch (error) {
    console.error(error)
  }
})

router.post("/post-users",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const newUsersData = req.body

    await userService.createUsers(newUsersData)

    return res.status(200).json({
      message: "users created succesfully!"
    })
  } catch (error) {
    console.error(error)
  }
})

router.patch("/patch-user/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(updateUserSchema, "body"),
  async (req, res) => {
  try {
    const { id } = req.params
    const userDataToUpdate = req.body
    await userService.patchUser(userDataToUpdate, id)

    res.status(200).json({
      message: "User updated!"
    })
  } catch (error) {
    console.error(error)
  }
})

router.delete("/delete/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(deleteUserSchema, "params"),
  async (req, res) => {
  try {
    const {id} = req.params

    await userService.deleteUser(id)

    return res.status(200).json({
      message: "User deleted successfully"
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
