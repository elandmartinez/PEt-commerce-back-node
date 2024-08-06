const Joi = require('joi');

const idSchema = Joi.number().integer()
const cardLastFourNumbersSchema = Joi.string().min(16).max()
const purchaseDateSchema = Joi.string()
const statusSchema = Joi.string()
const cardOwnerNameSchema = Joi.string()
const customerIdSchema = Joi.number().integer()
const productIdsSchema = Joi.array()

const getOrderSchema = Joi.object({
	id: idSchema.required(),
})

const getOrdersByCustomerIdSchema = Joi.object({
  customerId: customerIdSchema.required()
})

const createOrderSchema = Joi.object({
  id,
  purchaseDate: purchaseDateSchema.required(),
  cardOwnerName: cardOwnerNameSchema.require(),
  cardLastFourNumbers: cardLastFourNumbersSchema.required(),
  status: statusSchema.required(),
	customerId: customerIdSchema().required(),
  productIds: productIdsSchema.required()
});

const updateCustomerSchema = Joi.object({
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
  updateCustomerSchema,
  getOrderSchema,
  getOrdersByCustomerIdSchema,
  deleteOrderSchema
}
