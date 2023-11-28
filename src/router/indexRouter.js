const express = require("express")
const indexRouter = express.Router()

const customerRouter = require("./customerRouter")
const eventRouter = require("./eventRouter")



indexRouter.use("/customer", customerRouter)
indexRouter.use("/events", eventRouter)

module.exports = indexRouter