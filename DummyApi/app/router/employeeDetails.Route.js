module.exports = app => {
    const employeeDetails = require("../controller/employeeDetails.controller")
    var router = require("express").Router()

    //Add employee details
    router.post("/add/details", employeeDetails.create)
    router.get("/get/details", employeeDetails.findAllEmployee)
    app.use('/api', router);
}