const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;

//Add User
exports.create = (req, res) => {
  console.log("Request Body:", req.body);
  const employee = {
    //image: req.file.path,
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    Salary: req.body.Salary,
  };
  Employee.create(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the employee.",
      });
    });
};

//Get employee
exports.findAll = (req, res) => {
  console.log(req, res, "req");
  Employee.findAll({
    attributes: ["id", "Fname", "Lname", "Salary"],
    limit: 10,
    order: [["id", "DESC"]],
  })
    .then((employee) => {
      return res.status(200).json({
        employee,
      });
    })
    .catch((err) => {
      return res.status(400).json({ err });
    });
};

//Get employee by id
exports.findOne = (req, res) => {
  console.log(req, res, "req");
  let id = req.params.id;
  Employee.findByPk(id)
    .then((employee) => {
      return res.status(200).json({
        employee,
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

//Delete empolyee
exports.delete = (req, res) => {
  let id = req.params.id;
  Employee.destroy({ where: { id: id } })
    .then((employee) => {
      return res.status(200).json({
        employee,
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

//Update User
exports.update = (req, res) => {
  let { Fname, Lname, Salary } = req.body;
  let id = req.params.id;

  Employee.findOne({ where: { id: id } })
    .then((employee) => {
      if (employee) {
        employee
          .update({ Fname, Lname, Salary })
          .then((updateEmployee) => {
            res.status(200).json({
              updateEmployee,
            });
          })
          .catch((err) => {
            res.status(500).json({ err });
          });
      } else {
        res.status(206).json({
          messege: "Employee not found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

// //upload image

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null, "Images")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// exports.upload = multer({
//     storage : storage,
//     limits: {fileSize: "1000000"},
//     fileFilter: (req,file, cb) => {
//         const fileTypes= /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname){
//             return cb(null, true)
//         }
//         cb('Give proper file format to upload')
//     }
// }).single('image')
