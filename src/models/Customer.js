const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    place:{
        type: String,
    },
    price:{
        type: Number,
    },
    capacity:{
        type: Number,
    },
    assistance:{
        type: Number,
    },
})

const Customer = mongoose.model("Customer", customerSchema)