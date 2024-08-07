const Joi = require('joi');

const idSchema = Joi.number().integer()
const cardLastFourNumbersSchema = Joi.string().min(16).max(16)
const purchaseDateSchema = Joi.string()
const statusSchema = Joi.string()
const cardOwnerNameSchema = Joi.string()
const customerIdSchema = Joi.number().integer()
const productIdsSchema = Joi.array()

const getOrderSchema = Joi.object({
	id: idSchema.required(),
})

const getOrdersByCustomerEmailSchema = Joi.object({
  customerId: customerIdSchema.required()
})

const createOrderSchema = Joi.object({
  purchaseDate: purchaseDateSchema.required(),
  cardOwnerName: cardOwnerNameSchema.required(),
  cardLastFourNumbers: cardLastFourNumbersSchema.required(),
  status: statusSchema.required(),
	customerId: customerIdSchema.required(),
  productIds: productIdsSchema.required()
});

const updateOrderSchema = Joi.object({
  purchaseDate: purchaseDateSchema,
  cardOwnerName: cardOwnerNameSchema,
  cardLastFourNumbers: cardLastFourNumbersSchema,
  status: statusSchema,
	customerId: customerIdSchema,
  productIds: productIdsSchema
})

const deleteOrderSchema = Joi.object({
  id: idSchema.required()
})

module.exports = {
	createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
  getOrdersByCustomerEmailSchema,
  deleteOrderSchema
}
