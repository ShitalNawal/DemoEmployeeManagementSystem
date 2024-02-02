const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(bodyParser.json());

const db = require("./app/models")

db.sequelize.sync()
.then(()=>{
    console.log("sync db")
}).catch((err)=>{
    console.log("failed to sync db",err.message)
})

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
app.get("/", (req,res)=>{
    res.send("Api is working")
})
//*********** */
app.use(express.static("Images"));
//require("./app/router/dummyUserRoute")(app)
require("./app/router/employeeDetails.Route")(app)
const documentRoute = require("./app/router/documentRout");
app.use("/", documentRoute);
app.listen(6660, ()=>{
    console.log("Server is running on port 6660")
})