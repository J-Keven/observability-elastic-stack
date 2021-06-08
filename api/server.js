const express = require("express");
const apm = require("elastic-apm-node");
const AppError = require("./erros/AppError")
const cors = require("cors")
const apmConfigs = {
  serviceName: "api-service",
  secretToken: '',
  apiKey: "",
  serverUrl: "",
  environment: "production"
}

apm.start(apmConfigs)

const app = express();
app.use(cors())
app.use(express.json())

app.get("/debits", (req, res) => {
  const err = new AppError("erros!", 400)

  // apm.captureError(err)
  res.staus(500).json(err)
})

app.post("/debits", (req, res) => {
  res.json(['compra 1', 'compra 2', 'compra 2'])
})

app.get("/erros", (req, res) => {
  const err = new AppError("erros!", 400)

  apm.captureError(err)
  res.staus(500).json(err)
})

app.listen(3333)