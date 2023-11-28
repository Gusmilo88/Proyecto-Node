const Event = require("../models/Events")


const eventDAL = {
    getAllEvents: async()=> {
        return await Event.find()
    },
    findEventById: async(id)=> {
        return await Event.findById(id)
    },
    createEvent: async(payload)=> {
        try {
            
            const event = await Event.create(payload)

            return event
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = eventDAL