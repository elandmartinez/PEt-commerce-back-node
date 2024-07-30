const express = require("express")
const db = require("./libs/sequelize")
const routerApi = require("./routes")

const app = express()
const port = 8080

routerApi(app)

app.get('/', (req, res) => {
  res.send("bip bop bip bop, new route")
})

app.listen(port, () => {
  console.log("bip bop starting the server")
})
