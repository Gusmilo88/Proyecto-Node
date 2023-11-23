const express = require("express");
require("./db")
// const Event = require ("../src/models/Events.js");
const indexRouter = require("./router/indexRouter.js");
const app = express();

app.use(express.json()) //Transforma los objetos en json para agarrar lo que viene de body
app.use("/api", indexRouter)

app.listen(3009, ()=> {
    console.log("Server running in http://localhost:3009");
})