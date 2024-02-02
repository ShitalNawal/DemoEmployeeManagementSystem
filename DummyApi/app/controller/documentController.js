const multer = require("multer");
const db = require("../models");
const documentModel = db.document;
const Employee = db.employee

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./app/Images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " " + file.originalname);
    }
});

const upload = multer({ storage: fileStorageEngine });

const uploadFile = (req, res) => {
    documentModel.create({
        fileName: req.file.originalname,
        filePath: req.file.path,
        empId: Employee.id,
       
    })
        .then(() => {
            res.send("File uploaded successfully");
        })
        .catch(err => {
            res.status(500).send("Error uploading the file: " + err.message);
        });
};

// Controller function to get uploaded documents
exports.getDocuments = (req, res) => {
    console.log("Inside getDocuments function");
    documentModel.findAll({
        attributes: ["fileName","filePath"]
    })
        .then(documents => {
            res.status(200).json(documents);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving documents."
            });
        });
};
// const getFileList = (req, res) => {
//     const directoryPath = "./app/Images"
// }

module.exports = { upload, uploadFile };
