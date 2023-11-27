const customerDAL = require("../repositories/customerDAL")

const customerService = {


    getCustomers: async()=> {

        const customersFounded = customerDAL.getAllEvents()

        if(customersFounded && customersFounded.length > 0){
            return customersFounded
        }else {
            throw new Error("No hay customers")
        }
    },


    createCustomer: async(payload)=> {

        if(!payload){
            throw new Error("Se necesitan datos para crear al customer")
        }
        const customer = customerDAL.createCustomer(payload)

        if(customer){
            return customer
        }
    }

}

module.exports = customerService