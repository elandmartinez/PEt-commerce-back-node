const bcrypt = require("bcrypt")

async function hashPassword (password) {
  const hashedPassword = await  bcrypt.hash(password, 10)

  return hashedPassword
}

module.exports = hashPassword
