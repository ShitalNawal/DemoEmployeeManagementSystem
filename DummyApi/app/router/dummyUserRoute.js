module.exports = app => {
    const employee = require("../controller/dummyUserController")
    var router = require("express").Router()

    //Create
    router.post("/add", employee.create);

    //Get All empolyee
    router.get("/get",employee.findAll);

    //Get User by id
    router.get("/get/:id", employee.findOne)

    //Delete
    router.delete("/delete/:id", employee.delete)


    //Update
    router.put("/update/:id", employee.update)

    app.use('/api', router);
}