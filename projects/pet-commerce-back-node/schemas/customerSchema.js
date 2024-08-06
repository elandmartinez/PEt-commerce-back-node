const Joi = require('joi')

const idSchema = Joi.number().integer()
const phoneNumberSchema = Joi.number().min(10).max(10)
const countryCodeSchema = Joi.string().min(1).max(3)
const userIdSchema = Joi.number().integer()
const nameSchema = Joi.string()
const emailSchema = Joi.string().email()
const passwordSchema = Joi.string().min(4)
const roleSchema = Joi.string()

const createCustomerSchema = Joi.object({
  name: nameSchema.required(),
  email: emailSchema.required(),
  phoneNumber: phoneNumberSchema.required(),
  countryCode: countryCodeSchema.required(),
  password: passwordSchema.required(),
  role: roleSchema.required()
})

const getCustomerSchema = Joi.object({
  id: idSchema.required()
})

const getCustomerByEmailSchema = Join.object({
  id: emailSchema.required()
})

const updateCustomerSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  countryCode: countryCodeSchema,
  password: passwordSchema,
  role: roleSchema
})

const deleteCustomerSchema = Joi.object({
  id: idSchema.required()
})

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
  getCustomerByEmailSchema,
  deleteCustomerSchema
}
