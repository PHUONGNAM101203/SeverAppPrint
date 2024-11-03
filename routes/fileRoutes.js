const express = require("express");
const router = express.Router();
const fileController = require("../controller/fileController");
const { upload } = require("../config/storage/fileStorage");

//API Upload File
router.post(
  "/upload/:hostname",
  upload.single("file"),
  fileController.uploadFile
);

//API Download File
router.post("/download", fileController.downloadFile);

module.exports = router;
