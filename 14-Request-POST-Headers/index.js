const express = require("express");
const app = express();
const port = 3000;

app.post("/header", (req, res) => {
   const headerUser = req.header("userName");
   const headerCity = req.header("city");

   res.send(`${headerUser} ${headerCity}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
