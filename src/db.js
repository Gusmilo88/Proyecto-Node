const mongoose = require("mongoose");

const passwordDB = process.env.PASSWORD_DB_CONECTION;
const userdDb = process.env.USER_DB_CONECTION;

mongoose
  .connect(
    `mongodb+srv://${userdDb}:${passwordDB}@cluster0.9p0csxe.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.log("Error to connecting to database" + error);
  });
