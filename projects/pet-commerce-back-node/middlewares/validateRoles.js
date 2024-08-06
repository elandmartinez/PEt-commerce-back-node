const boom  = require("@hapi/boom")
const { CUSTOMER_ALLOWED_ENDPOINTS, ROLES } = require("../utils/constants")

function validateRoles (req, res, next) {
  const reqUrl = req.originalUrl
  const userRole = req.userRole
  const isNotCustomerAllowedEndpoint = !CUSTOMER_ALLOWED_ENDPOINTS.find(endpoint => reqUrl.includes(endpoint))

  console.log({isNotCustomerAllowedEndpoint, userRole})

  console.log({url: req.originalUrl})
  if(userRole === ROLES.CUSTOMER & isNotCustomerAllowedEndpoint) return res.status(403).json({message: "You dont have permissions to acces this endpoint"})
  next()
}

module.exports = validateRoles
