const { connection } = require("./app/config/postgreSql")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json());
const PORT = 9990
connection();

require("./routes/user.route")

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})