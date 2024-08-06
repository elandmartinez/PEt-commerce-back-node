const CUSTOMER_ALLOWED_ENDPOINTS = [
  "/api/products/get",
  "/api/orders/get-by-client-id",
  "/api/orders/post-order",
  "api/clients/get-client"
]

const ROLES = {
  ADMIN: "ADMIN",
  CUSTOMER: "CUSTOMER"
}

module.exports = {
  CUSTOMER_ALLOWED_ENDPOINTS,
  ROLES
}
