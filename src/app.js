const express = require("express");
require("./db")


const app = express();




app.listen(3009, ()=> {
    console.log("Server running in http://localhost:3009");
})