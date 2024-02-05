const express = require("express");
// 1
const multerPackage = require("multer");
const app = express();

// 2
const storage = multerPackage.diskStorage({
   destination: (req, file, callBack) => {
      callBack(null, "./uploads");
   },
   filename: (req, file, callBack) => {
      callBack(null, file.originalname);
   },
});

// 3
const upload = multerPackage({ storage: storage }).single("myfile");

// 4
app.post("/upload", (req, res) => {
   upload(req, res, (err) => {
      if (err) {
         return res.end("File Upload Failed");
      }
      res.end("File Upload Successful");
   });
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
