const config = require("../../../config/index")
const {Strategy, ExtractJwt} = require("passport-jwt")

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
})

module.exports = jwtStrategy
