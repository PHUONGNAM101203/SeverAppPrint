const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: String,
  pageCount: Number,
  printCost: Number,
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
