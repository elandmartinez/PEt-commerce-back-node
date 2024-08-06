const express = require("express")
const ProductService = require("../services/productService")
const authenticateToken = require("../middlewares/authenticateToken")
const validateRoles = require("../middlewares/validateRoles")

const productService = new ProductService()
const router = express.Router()

router.get("/get",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const products = await productService.getProducts();

    res.status(200).json({
      message: "Products obtained!",
      body: products
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
    const product = await productService.findProduct(parseInt(id))

    return res.status(200).json({
      message: "Product obtained!",
      body: product
    })
  } catch (error) {
    console.error(error)
  }
})

router.post("/post-product",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const productData = req.body
    await productService.createProduct(productData)

    return res.status(200).json({
      message: "Product created!"
    })

  } catch (error) {
    console.error(error)
  }
})

router.post("/post-products",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const newProductsData = req.body

    await productService.createProducts(newProductsData)

    return res.status(200).json({
      message: "Products created succesfully!"
    })
  } catch (error) {
    console.error(error)
  }
})

router.patch("/patch-product/:id",
  authenticateToken,
  validateRoles,
  async (req, res) => {
  try {
    const { id } = req.params
    const productDataToUpdate = req.body
    await productService.patchProduct(productDataToUpdate, id)

    res.status(200).json({
      message: "Product updated!"
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

    await productService.deleteProduct(id)

    return res.status(200).json({
      message: "Product deleted successfully"
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router