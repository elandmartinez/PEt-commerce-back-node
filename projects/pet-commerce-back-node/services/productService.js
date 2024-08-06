const { models } = require("../libs/sequelize")

class ProductService {
  constructor () {}

  async getProducts () {
    try {
      const products = await models.Product.findAll()

      return products
    } catch (error) {
      console.error(error)
    }
  }

  async findProduct (productId) {
    try {
      const product = await models.Product.findByPk(productId)

      return product
    } catch (error) {
      console.error(error)
    }
  }

  async createProduct (newProduct) {
    try {
      await models.Product.create(newProduct)
    } catch (error) {
      console.error(error)
    }
  }
  async createProducts (newProducts) {
    try {
      await models.Product.bulkCreate(newProducts)
    } catch (error) {
      console.error(error)
    }
  }

  async patchProduct (ProductDataToUpdate, productId) {
    try {
      await models.Product.update(ProductDataToUpdate, { where : {id: productId} })
    } catch (error) {
      console.error(error)
    }
  }

  async deleteProduct (productId) {
    try {
      const product = await models.Product.findByPk(productId);
      await product.destroy()
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = ProductService
