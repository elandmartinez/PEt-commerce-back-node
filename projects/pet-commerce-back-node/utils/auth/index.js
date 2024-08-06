const passport = require("passport")
const localStrategy = require("./strategies/localStrategy")
const jwtStrategy = require("./strategies/jwtStrategy")

passport.use(jwtStrategy)
passport.use(localStrategy)
