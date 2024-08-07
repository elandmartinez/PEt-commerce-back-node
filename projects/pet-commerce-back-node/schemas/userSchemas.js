const Joi = require("joi")

const idSchema = Joi.number().integer()
const emailSchema = Joi.string().email()
const passwordSchema = Joi.string().min(4)
const roleSchema = Joi.string()

const createUserSchema = Joi.object({
  email: emailSchema.required(),
  password: passwordSchema.required(),
  role: roleSchema.required(),
})

const getUserSchema = Joi.object({
  id: idSchema
})

const getUserByEmailSchema = Joi.object({
  id: emailSchema
})

const updateUserSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
  role: roleSchema,
})

const deleteUserSchema = Joi.object({
  id: idSchema.required()
})

module.exports = {
  createUserSchema,
  getUserSchema,
  getUserByEmailSchema,
  updateUserSchema,
  deleteUserSchema
}
