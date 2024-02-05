const express = require("express");
// import multer
const multerModule = require("multer");
const app = express();
// create an instance of multer
const multer = multerModule();

app.use(multer.array()); //** */
app.use(express.static("public")); //** */

app.post("/form-data", (req, res) => {
   const jsonData = req.body;

   res.send(JSON.stringify(jsonData));
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
