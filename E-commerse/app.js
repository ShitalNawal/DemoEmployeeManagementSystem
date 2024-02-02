const express = require("express")
const dotenv = require("dotenv")
const app = express();
dotenv.config();
const dbUser = require("./db")
app.use(express.json());

//Get Api
app.get("/get",dbUser.getUsers)
app.post("/add", dbUser.createUsers)
app.get("/:id", dbUser.getUserbyId)
app.put("update/", dbUser.updateUser)
app.delete("/:id", dbUser.deleteUser)
app.listen(9900,()=>{
    console.log("Server is running on Port 9900")
})