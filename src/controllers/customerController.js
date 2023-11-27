const customerService = require("../services/customerService")


const customerController = {
    async getCustomers(req, res) {

        try {

            const customersFounded = customerService.getCustomers()
            if(customersFounded.length > 0){
                res.status(200).json(customersFounded)
            }else {
                res.send("Customers not founded")
            }

        } catch (error) {
            res.status(500).json({message: "Error getting customers: " + error.message})
        }
    },

    async getOneCustomer(req, res) {
        console.log(req.params);
        try {
            
            const customer = await Customer.findById(req.params.id)
            res.status(200).json({success: true, customer: customer})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})

        }
    },

    async createCustomer(req, res){

        try {
            const payload = req.body

            const customerCreated = customerService.createCustomer(payload)
    
            if(customerCreated){
                res.status(201).json({message: "Customer created"})
            }else {
                res.send("Error creating customer")
            }

        } catch (error) {
            res.status(500).json({message: "Error creating customer " + error,message})

        }
        
        
    },

    async updateCustomer(req, res){
        try {
            const customerUpdated = await Customer.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.status(200).json({success: true, customer: customerUpdated, message: "Update"})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})
        }
    },

    async deleteCustomer(req, res){
        try {
            const customerDeleted = await Customer.findOneAndDelete({_id: req.params.id})
            res.status(200).json({success: true, customer: customerDeleted, message: "Delete"})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})
        }
    }
}

module.exports = customerController