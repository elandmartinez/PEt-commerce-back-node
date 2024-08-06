const expres = require("express")
const userRoutes = require("./userRoutes")
const orderRoutes = require("./orderRoutes")
const productRoutes = require("./productRoutes")
const customerRoutes = require("./customerRoutes")
const authRoutes = require("./authRoutes")

function routerApi(app) {
  const router = expres.Router()

  app.use("/api", router)

  router.use("/users", userRoutes)
  router.use("/orders", orderRoutes)
  router.use("/customers", customerRoutes)
  router.use("/products", productRoutes)
  router.use("/auth", authRoutes)
}

module.exports = routerApi
