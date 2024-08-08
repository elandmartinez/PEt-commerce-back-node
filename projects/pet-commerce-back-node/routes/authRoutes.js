const express = require("express")
const jwt = require("jsonwebtoken")
const config = require("../config/index")
const UserService = require("../services/userService")
const CustomerService = require("../services/customerService")
const validationSchemaHandler = require("../middlewares/validationSchemaHandler")
const signUpCustomerSchema = require("../schemas/signUpSchema")
const hashPassword = require("../utils/hooks/hashPassword")

const router = express.Router()
const customerService = new CustomerService()
const userService = new UserService()

function createAndSignToken(role) {
  const tokenPayload = {role}
  const token = jwt.sign(tokenPayload, config.jwtSecret)

  return token
}

router.post("/login",
  async (req, res) => {
    try {
      console.log("try catch")
      const { email } = req.body
      console.log({body: req.body})
      const user = await userService.findUserByEmail(email)
      console.log({user})
      delete user.dataValues.password
      const token = createAndSignToken(user.role)

      res.status(201).json({
        message: "User logged",
        body: {
          ...user.dataValues,
          token: token
        }
      })
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
)

router.post("/sign-up", async (req, res) => {
  validationSchemaHandler(signUpCustomerSchema, "body")
  try {
    const userData = req.body
    console.log({userData})

    const hashedCustomerPassword = await hashPassword(userData.password)
    console.log({hashedCustomerPassword})

    await customerService.createCustomer(userData)

    await userService.createUser({
      email: userData.email,
      password: userData.password,
      role: userData.role ? userData.role : "CUSTOMER"
    })

    const token = createAndSignToken(userData.role)

    res.status(201).json({
      message: "User created",
      body: { token }
    })
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

module.exports = router
