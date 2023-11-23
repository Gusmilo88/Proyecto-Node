const express = require("express")
const indexRouter = express.Router()

const customerRouter = require("./customerRouter")


indexRouter.use("/customer", customerRouter)

module.exports = indexRouter