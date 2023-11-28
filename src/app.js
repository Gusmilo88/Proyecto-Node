const express = require("express");
const indexRouter = require("./router/indexRouter.js");
const createError = require("http-errors")
const cors = require("cors")
require("dotenv").config()
require("./db")


console.log(process.env.PASSWORD_DB_CONECTION);

const app = express();

app.use(cors())


app.use(express.json()) //Transforma los objetos en json para agarrar lo que viene de body
app.use("/api", indexRouter)


const notFound = (req, res, next)=> {
    next(createError(404, "Not Found"))
}

const errorHandler = (err, req, res, next)=> {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}


app.use(notFound)
app.use(errorHandler)

app.listen(3009, ()=> {
    console.log("Server running in http://localhost:3009");
})