const Joi = require('joi')

const idSchema = Joi.number().integer()
const nameSchema = Joi.string().alphanum().min(3).max(15)
const descriptionSchema = Joi.string().min(10).max(500)
const priceSchema =  Joi.number().integer().min(10)
const providerSchema = Joi.string()
const dimensionsSchema = Joi.string()
const imageUrlSchema = Joi.string()
const categorySchema = Joi.string()
const expirationDateSchema = Joi.string()
const elaborationDateSchema = Joi.string()
const stockSchema = Joi.number().integer()

const limit = Joi.number().integer().min(1)
const offset = Joi.number().integer().min(0)
const minPrice = Joi.number().integer().min(1)
const maxPrice = Joi.number().integer().min(1)

const createProductSchema = Joi.object({
  name: nameSchema.required(),
  description: descriptionSchema.required(),
  price: priceSchema.required(),
  category: idSchema.required(),
  provider: providerSchema.required(),
  dimensions: dimensionsSchema.required(),
  category: categorySchema.required(),
  expirationDate: expirationDateSchema.required(),
  elaborationDate: elaborationDateSchema.required(),
  stock: stockSchema.required(),
  imageUrl: imageUrlSchema.required()
})

const getProductSchema = Joi.object({
  id: idSchema.required(),
})

const updateProductPropSchema = Joi.object({
  name: nameSchema,
  description: descriptionSchema,
  price: priceSchema,
  category: idSchema,
  provider: providerSchema,
  dimensions: dimensionsSchema,
  category: categorySchema,
  expirationDate: expirationDateSchema,
  elaborationDate: elaborationDateSchema,
  stock: stockSchema,
  imageUrl: imageUrlSchema
})

const deleteProductSchema = Joi.object({
  id: idSchema.required(),
})


module.exports = {
  getProductSchema,
  updateProductPropSchema,
  createProductSchema,
  deleteProductSchema}
