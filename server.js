const express = require("express");
const connectMongoose = require("./config/db/mongoose");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối tới MongoDB
connectMongoose();

// Middleware để phân tích JSON
app.use(express.json());

// Api chuyên xử lý file
app.use("/api/files", fileRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
