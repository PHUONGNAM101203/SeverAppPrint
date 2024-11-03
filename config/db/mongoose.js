const mongoose = require("mongoose");

// Kết nối database MongoDB
const connectMongoose = async () => {
  await mongoose
    .connect(`mongodb://localhost:27017/${process.env.MONGOOSE_DB}`)
    .then(() => console.log("Connect MongoDB Success!"))
    .catch((err) => console.error("Connect MongoDB Failed", err.message));
};

module.exports = connectMongoose;
