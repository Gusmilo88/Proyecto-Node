const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://gusmilo88:cnWB7y0uitLszxB3@cluster0.9p0csxe.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database successfully");
})
.catch((error)=> {
    console.log("Error to connecting to database" + error);
})