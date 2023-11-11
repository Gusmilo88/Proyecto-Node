const express = require("express");

const app = express();

app.get("/eventos", (req, res) => {
    res.send("Obtuviste todos los eventos")
})

app.post("/eventos", (req, res) => {

    let querys = req.query

    console.log(querys);

    res.json({message: "obtuviste todos los eventos"})
})

app.listen(3009, ()=> {
    console.log("Servidor corriendo en http://localhost:3009");
})