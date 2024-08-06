const bcrypt = require("bcrypt")

function verifyPassword (password, hashedPassword) {
  const matches = bcrypt.compare(password, hashedPassword)

  return matches
}

module.exports = verifyPassword
