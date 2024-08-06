const boom = require("@hapi/boom")
const config = require("../config/index")
const jwt = require("jsonwebtoken")

function authToken (req, res, next) {
  const authorizationHeader = req.headers["authorization"]
  const token  = authorizationHeader && authorizationHeader.split(" ")[1]

  if(token == null) boom.unauthorized("User has no permissions to access this route")

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if(err) return res.status(403).json({
      message: "Token not authorized"
    })
    req.userRole = user.role

    next()
  })
}

module.exports = authToken
