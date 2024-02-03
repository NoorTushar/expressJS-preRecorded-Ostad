const express = require("express");

const app = express();

const port = 3300;

app.get("/status", (req, res) => {
   res.status(201);
   res.end();
});

app.listen(port, () => {
   console.log(`server running success`);
});
