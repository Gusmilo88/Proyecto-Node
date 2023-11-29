const eventService = require("../services/eventService")


const eventController = {
    async getEvents(req, res) {

        try {

            const eventsFounded = await eventService.getEvents()
            if(eventsFounded.length > 0){
                res.status(200).json(eventsFounded)
            }else {
                res.send("Events not founded")
            }

        } catch (error) {
            res.status(500).json({message: "Error getting events: " + error.message})
        }
    },

    async getOneEvent(req, res) {
        try {
            
            const event = await Event.findById(req.params.id)
            res.status(200).json({success: true, event: event})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})

        }
    },

    async createEvent(req, res){

        try {
            const payload = req.body

            const eventCreated = await eventService.createEvent(payload)
    
            if(eventCreated){
                res.status(201).json({message: "Event created"})
            }else {
                res.send("Error creating event")
            }

        } catch (error) {
            res.status(500).json({message: "Error creating event " + error,message})

        }
        
        
    },

    async updateEvent(req, res){
        try {
            const eventUpdated = await Event.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.status(200).json({success: true, customer: eventUpdated, message: "Update"})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})
        }
    },

    async deleteEvent(req, res){
        try {
            const eventDeleted = await Event.findOneAndDelete({_id: req.params.id})
            res.status(200).json({success: true, customer: eventDeleted, message: "Delete"})

        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"})
        }
    }
}

module.exports = eventController