const express = require("express");
// const Event = require ("../src/models/Events.js");
const indexRouter = require("./router/indexRouter.js");
require("dotenv").config()
require("./db")


console.log(process.env.PASSWORD_DB_CONECTION);

const app = express();


app.use(express.json()) //Transforma los objetos en json para agarrar lo que viene de body
app.use("/api", indexRouter)

app.listen(3009, ()=> {
    console.log("Server running in http://localhost:3009");
})