const express = require("express")
const OrderService = require("../services/orderService")
const authenticateToken = require("../middlewares/authenticateToken")
const validateRoles = require("../middlewares/validateRoles")

const router = express.Router()
const orderService = new OrderService()

router.get("/get",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const orders = await orderService.getOrders()

    res.status(200).json({
      message: "Orders obtained!",
      body: orders
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

router.get("/get/:id",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const {id} = req.params
    const order = orderService.findOrder(id)

    res.status(200).json({
      message: "Order obtained!",
      body: order
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

router.get("/get-by-customer-id/:clientId",
  authenticateToken,
  validateRoles,
  async (req, res) => {
    try {
      const { clientId } = req.params
      const clientOrders = await orderService.getByCustomerId(clientId)

      res.status(200).json({
        message: "Client orders retreived",
        body: clientOrders
      })

    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
)

router.post("/post-order",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const newOrderData = req.body
    await orderService.createOrder(newOrderData)

    res.status(200).json({
      message: "Order created!"
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

router.post("/post-orders",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const newOrdersData = req.body
    await orderService.createOrders(newOrdersData)

    res.status(200).json({
      message: "Orders created"
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

router.patch("/patch-order/:id",
  authenticateToken,
  async (req, res) => {
  try {
    const {id} = req.params
    const dataToUpdate = req.body

    await orderService.patchOrder(dataToUpdate)

    res.status(200).json({
      message: "Order patched"
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

router.delete("/delete-order/:id",
  authenticateToken,
  async (req, res) => {
  try {
    const {id} = req.params
    const order = await orderService.findOrder(id)

    await order.destroy()

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

module.exports = router
