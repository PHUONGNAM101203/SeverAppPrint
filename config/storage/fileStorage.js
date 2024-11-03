const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Hàm kiểm tra folder
const ensureDirectoryExistence = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Tạo thư mục cùng với các thư mục cha nếu cần
  }
};

// Hàm kiểm tra và thiết lập cấu hình lưu trữ
const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === ".pdf") {
      ensureDirectoryExistence("PDF");
      cb(null, "PDF/");
    } else if (ext === ".docx") {
      ensureDirectoryExistence("DOCX");
      cb(null, "DOCX/");
    } else if (ext === ".xlsx") {
      ensureDirectoryExistence("EXCEL");
      cb(null, "EXCEL/");
    } else {
      cb(new Error("Unsupported file type"), null);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Khởi tạo multer với cấu hình lưu trữ
const upload = multer({ storage: storageFile });

module.exports = { upload }; // Xuất middleware upload
