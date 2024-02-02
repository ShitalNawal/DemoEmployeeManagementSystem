const express = require("express");
const router = express.Router();
const documentModel  = require("../controller/documentController");
router.post("/single", documentModel.upload.single("images"),documentModel.uploadFile);
//router.get('/documents', documentModel.getDocuments);

module.exports = router;