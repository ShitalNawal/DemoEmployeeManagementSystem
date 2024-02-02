module.exports = app =>{
    const users = require("../controller/user.controller");
     var router = require("express").Router();

     //create
     router.post("/", users.create);

     //findOne
     router.get("/:id", users.findOne);

     //
     app.use('/api/userDetail', router)
}