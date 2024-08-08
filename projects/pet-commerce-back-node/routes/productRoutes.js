const express = require("express")
const ProductService = require("../services/productService")
const authenticateToken = require("../middlewares/authenticateToken")
const validateRoles = require("../middlewares/validateRoles")
const validationSchemaHandler = require("../middlewares/validationSchemaHandler")
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  deleteProductSchema
} = require("../schemas/productSchema")

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
    throw new Error(error)
  }
})

router.get("/get/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(getProductSchema, "params"),
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
    throw new Error(error)
  }
})

router.post("/post-product",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(createProductSchema, "body"),
  async (req, res) => {
  try {
    const productData = req.body
    await productService.createProduct(productData)

    return res.status(200).json({
      message: "Product created!"
    })

  } catch (error) {
    console.error(error)
    throw new Error(error)
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
    throw new Error(error)
  }
})

router.patch("/patch-product/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(updateProductSchema, "body"),
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
    throw new Error(error)
  }
})

router.delete("/delete/:id",
  authenticateToken,
  validateRoles,
  validationSchemaHandler(deleteProductSchema, "params"),
  async (req, res) => {
  try {
    const {id} = req.params

    await productService.deleteProduct(id)

    return res.status(200).json({
      message: "Product deleted successfully"
    })
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

module.exports = router
