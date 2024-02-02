const db = require("./model");
const user = db.user;
const Op = db.Sequelize.Op;

//Create user
exports.create = (req, res) => {
  const userData = {
    userDetail: req.body.userDetail,
    firstName: req.body.fname,
    LastName: req.body.Lname,
    address: req.body.address,
    city: req.body.city,
  };

  userDetail.create(userData)
  .then(data,()=>{
    res.send(data,"data")
  })
  .catch(err=>{
    res.status(500).send({
      message: err.message || "Some error occurred while creating the userDetails."
    })
  })
};

//find one user
exports.findOne = (req, res) => {
  const id = req.params.id;

  userDetail.findByPk(id)
  .then(data =>{
    if(data){
      res.send(data,"data")
    }
    else{
      res.status(404).send({
        message: 'Cannot find userDetail with id = ${id}.'
      })
    }
  })
  .catch(err =>{
    res.send(500).send({
      message: "error while retrieving while getting user with id" +id
    })

  })
};

//findAll
exports.findAll = (eq, res) => {};

//update
exports.update = (req, res) => {};

//delete
exports.delete = (req, res) => {};
