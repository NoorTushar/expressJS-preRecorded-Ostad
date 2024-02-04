const express = require("express");
const app = express();

app.get("/download", (req, res) => {
   res.download("./image/nature.jpg");
});

const port = 5500;

app.listen(port, () => {
   console.log(`server is running`);
});
