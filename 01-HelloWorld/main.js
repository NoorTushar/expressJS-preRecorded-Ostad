const express = require("express");

const app = express();
const port = 6000;
app.listen(port, () => {
   console.log(`server success`);
});

app.get("/", (req, res) => {
   res.send("Hello World! Express JS! Noor Tushar Khan");
});
