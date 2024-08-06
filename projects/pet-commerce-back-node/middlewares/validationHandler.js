const boom = require("@hapi/boom")

function validationHandler (schema, reqProperty) {
  return (req, res, next) => {
    const data = req[reqProperty]
    const { error } = schema.validate(date, {abortEarly: false})

    if(error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validationHandler
