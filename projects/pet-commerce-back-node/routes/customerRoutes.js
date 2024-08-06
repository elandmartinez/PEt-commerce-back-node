const express = require("express")
const CustomerService = require("../services/customerService")
const authenticateToken = require("../middlewares/authenticateToken")
const validateRoles = require("../middlewares/validateRoles")

const customerService = new CustomerService()
const router = express.Router()

router.get("/get",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const customers = await customerService.getCustomers();

    res.status(200).json({
      message: "Customers obtained!",
      body: customers
    })
  } catch (error) {
    console.error(error)
  }
})

router.get("/get/:id",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  const { id } =(req.params)
  try {
    const customer = await customerService.findCustomer(parseInt(id))

    return res.status(200).json({
      message: "Customer obtained!",
      body: customer
    })
  } catch (error) {
    console.error(error)
  }
})

router.post("/post-customer",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const customerData = req.body
    await customerService.createCustomer(customerData)

    return res.status(200).json({
      message: "Customer created!"
    })

  } catch (error) {
    console.error(error)
  }
})

router.post("/post-customers",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const newCustomersData = req.body

    await customerService.createCustomers(newCustomersData)

    return res.status(200).json({
      message: "Customers created succesfully!"
    })
  } catch (error) {
    console.error(error)
  }
})

router.patch("/patch-customer/:id",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const { id } = req.params
    const customerDataToUpdate = req.body
    await customerService.patchCustomer(customerDataToUpdate, id)

    res.status(200).json({
      message: "Customer updated!"
    })
  } catch (error) {
    console.error(error)
  }
})

router.delete("/delete/:id",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const {id} = req.params

    await customerService.deleteCustomer(id)

    return res.status(200).json({
      message: "Customer deleted successfully"
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
