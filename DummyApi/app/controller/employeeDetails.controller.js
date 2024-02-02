// const db = require("../models")
// const EmployeeDetails = db.employeeDetails
// const Op = db.Sequelize.Op;
// const Employee = db.employee
// //Add employee details
// exports.create = (req,res) => {
//     console.log(req,res, 'ress..');
//     const employeeDetails = {
//         id: employee.id,
//         address: req.body.address,
//         city: req.body.city,
//         country: req.body.country,
//         email: req.body.email,
//         phone: req.body.phone,
//         DOB: req.body.DOB,
//         gender: req.body.gender,

//     }
//     EmployeeDetails.create(employeeDetails)
//     .then(data => {
//         res.send(
//             data
//         )
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occured during creating employeeDetails"
//         })
//     })

// }

// //Get employee details

// exports.findAllEmployee = (req,res) => {
//     EmployeeDetails.findAll({
//         attributes:["empId", "address", "city", "country","email","phone","DOB","gender"],
//         limit: 5,
//         order: [['empId', 'DESC']]
//     })
//     .then(employeeDetails => {
//         return res.status(200).send(employeeDetails)
//     })
//     .catch(err => {
//         return res.status(500).send(err)
//     })
// }

const db = require("../models");
const EmployeeDetails = db.employeeDetails;
const employee = db.employee;
const Op = db.Sequelize.Op;

// Add employee details
exports.create = (req, res,params) => {
  console.log(req, res, "ress..");
  const { address, city, country, email, phone, DOB, gender } = req.body;

  // Create employee details with the associated employee id
  const employeeDetails = {
    empId: params.empId,
    address: address,
    city: city,
    country: country,
    email: email,
    phone: phone,
    DOB: DOB,
    gender: gender,
  };

  // Save employee details
  EmployeeDetails.create(employeeDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred during creating employeeDetails",
      });
    });
};

// Get employee details
exports.findAllEmployee = (req, res) => {
  EmployeeDetails.findAll({
    attributes: [
      "empId",
      "address",
      "city",
      "country",
      "email",
      "phone",
      "DOB",
      "gender",
    ],
    limit: 5,
    order: [["empId", "DESC"]],
  })
    .then((employeeDetails) => {
      return res.status(200).send(employeeDetails);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
