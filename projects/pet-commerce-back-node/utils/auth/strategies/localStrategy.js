const boom = require("@hapi/boom")
const { Strategy } = require("passport-local")
const UserService = require("../../../services/userService")
const verifyPassword = require("../../hooks/verifyPassword")

const userService = new UserService({
  emailField: "email",
  passwordField: "password"
}, async (email, password, done) => {
  try {
    const { dataValues: user } = userService.findUserByEmail(email)

    if(!user) done(boom.unauthorized(), false)

    const passwordMatches = verifyPassword(password, user.password)
    if(!passwordMatches) done(boom.unauthorized("/localStrategy"), false)

    delete user.password

    return done(null, user)
  } catch (error) {
    done(error, false)
  }
})
