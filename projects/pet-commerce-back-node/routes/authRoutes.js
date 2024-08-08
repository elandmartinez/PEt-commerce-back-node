const express = require("express")
const jwt = require("jsonwebtoken")
const config = require("../config/index")
const UserService = require("../services/userService")

const router = express.Router()
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
      const {email} = req.body
      const user = await userService.findUserByEmail(email)

      const token = createAndSignToken(user.role)

      res.status(201).json({
        message: "User logged",
        body: {
          user: req.user,
          token
        }
      })
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
)

router.post("/sign-up", async (req, res) => {
  try {
    const userData = req.body
    console.log({userData})
    await userService.createUser(userData)
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
