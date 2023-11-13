const mongoose = require("mongoose")

const eventsSchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
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

const Event = mongoose.model("Event", eventsSchema)

module.exports = Event