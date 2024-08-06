const bcrypt = require("bcrypt")

function hashPassword (password) {
  const hashedPassword = bcrypt.hash(password, 10)

  return hashPassword
}

module.exports = hashPassword
