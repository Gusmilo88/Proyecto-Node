const Customer = require("../models/Customer")

const customerController = {
    async getCustomer(req, res) {
        try {
            const customers = await Customer.find()

            res.status(200).json({success: true, customers: customers})
        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})
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
            const newCustomer = await Customer.create(req.body)
            res.status(200).json({success: true, customer: newCustomer})

        } catch (error) {
            console.log(error);
            res.status(500).json({success: false, message: "Internal server error"})
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