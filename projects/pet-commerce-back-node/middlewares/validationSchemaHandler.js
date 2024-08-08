const boom = require("@hapi/boom")

function validationSchemaHandler (schema, property) {
  return (req, res, next) => {
    var data = req[property]
    if(property === "params"){
      data = data.id ? { id: data.id } : {email: data.email}
    }
    const { error } = schema.validate(data, {abortEarly: false})

    if(error){
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validationSchemaHandler
