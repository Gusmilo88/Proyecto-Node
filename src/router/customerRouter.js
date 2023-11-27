const express = require("express")
const customerController = require("../controllers/customerController")
const customerRouter = express.Router()

customerRouter.get("/", customerController.getCustomers)

customerRouter.post("/", customerController.createCustomer)

customerRouter.put("/:id", customerController.updateCustomer)

customerRouter.delete("/:id", customerController.deleteCustomer)

customerRouter.get("/:id", customerController.getOneCustomer)


module.exports = customerRouter