const express = require("express")
const customerController = require("../controllers/customerController")
const { verifyData } = require("../middlewares/verifications")
const customerRouter = express.Router()

customerRouter.get("/", customerController.getCustomers)

customerRouter.post("/", verifyData, customerController.createCustomer)

customerRouter.put("/:id", customerController.updateCustomer)

customerRouter.delete("/:id", customerController.deleteCustomer)

customerRouter.get("/:id", customerController.getOneCustomer)


module.exports = customerRouter