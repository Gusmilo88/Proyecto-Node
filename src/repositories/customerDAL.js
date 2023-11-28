const Customer = require("../models/Customer")

const customerDAL = {
    getAllCustomers: async()=> {
        return await Customer.find()
    },
    findById: async(id)=> {
        return await Customer.findById(id)
    },
    createCostumer: async(payload)=> {
        try {
            
            const customer = await Customer.create(payload)

            return customer
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = customerDAL