const express = require("express");
const apm = require("elastic-apm-node");
const AppError = require("./erros/AppError")

const apmConfigs = {
  serviceName: "api-service",
  secretToken: '',
  apiKey: "",
  serverUrl: "http://apm:8200",
  environment: "production"
}

apm.start(apmConfigs)
const app = express();

app.use(express.json())

app.get("/debits", (req, res) => {

  res.json([])
})

app.get("/erros", (req, res) => {
  const err = new Error("erros!")
  apm.captureError(err)

  res.staus(500).json(err)
})

app.listen(3333)