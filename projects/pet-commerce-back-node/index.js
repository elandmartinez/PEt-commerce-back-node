const express = require("express")
const bodyParser = require("body-parser")

const db = require("./libs/sequelize")
const routerApi = require("./routes")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routerApi(app)

app.get('/', (req, res) => {
  res.send("bip bop bip bop, new route")
})

app.listen(port, () => {
  console.log("bip bop starting the server")
})
