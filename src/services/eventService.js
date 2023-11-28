const eventDAL = require("../repositories/eventDAL")

const eventService = {


    getEvents: async()=> {

        const eventsFounded = await eventDAL.getAllEvents()

        if(eventsFounded && eventsFounded.length > 0){
            return eventsFounded
        }else {
            throw new Error("No hay eventos")
        }
    },


    createEvent: async(payload)=> {

        if(!payload){
            throw new Error("Se necesitan datos para crear el evento")
        }
        const event = await eventDAL.createEvent(payload)

        if(event){
            return event
        }
    }

}

module.exports = eventService